const mongoose = require('mongoose');
const {Schema} = mongoose;

const TweetSchema =  new Schema({
    message :  { type: String, required: true},
    username : { type: String, required: true}
})

module.exports = mongoose.model('Tweet', TweetSchema);