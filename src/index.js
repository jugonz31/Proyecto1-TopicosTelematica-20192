const express = require('express');
const morgan = require('morgan');
const path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var User = require('./models/user')

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

const { mongoose } = require('./database');

const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//Rutas
app.use('/api/tweets', require('./routes/tweets.routes'))

//Archivos estaticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')))

// Register User
app.post('/user/register', function (req, res) {
    var password = req.body.password;
    var password2 = req.body.password2;

    if (password == password2) {
        var newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });

        User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        });
    } else {
        res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }
});

// Endpoint to login
app.post('/user/login',
    passport.authenticate('local'),
    function (req, res) {
        res.send(req.user);
    }
);

// Endpoint to get current user
app.get('/user/profile', function (req, res) {
    res.send(req.user);
})


// Endpoint to logout
app.get('/user/logout', function (req, res) {
    req.logout();
    res.send(null)
});


//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
});