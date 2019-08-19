import React, { Component } from 'react';
import Nav from './components/Nav';
import TweetCard from './components/TweetCard'
import Login from './components/Login'
import Logout from './components/Logout'
import AllTweets from './components/AllTweets'
import Register from './components/Register'
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      username: '',
      tweets: [],
      mytweets: [],
      _id: ''
    }
    this.agregarTweet = this.agregarTweet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editarTweet = this.editarTweet.bind(this);
  }

  componentDidMount() {
    this.obtenerUsuario();
  }

  agregarTweet(e) {
    if (this.state._id) {
      fetch('/api/tweets/' + this.state._id, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          window.location.reload();
        })
    } else {
      fetch('/api/tweets', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json)
        .then(data => {
          console.log(data)
          this.setState({ message: '', username: '' })
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  }

  obtenerUsuario() {
    fetch('user/profile')
      .then(res => res.json())
      .then(data => {
        this.setState({ username: data.username })
        console.log(data.username)
        console.log(this.state.username)
      })
      .then(() => this.obtenerTweets());
  }

  obtenerTweets() {
    fetch('api/tweets/username/' + this.state.username)
      .then(res => res.json())
      .then(data => {
        this.setState({ tweets: data })
        console.log(this.state.tweets)
      });
  }

  eliminarTweet(id) {
    if (confirm("¿Estas seguro de que deseas eliminar este mensaje?")) {
      fetch('/api/tweets/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          this.obtenerTweets;
          window.location.reload();
        })
    }
  }

  editarTweet(id) {
    fetch('/api/tweets/' + id)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ message: data.message, username: data.username, _id: data._id });
      })
      
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div>

        <Nav />

        <Switch>
          <Route path="/my-tweets">
            <div className="container"
              style={{
                backgroundColor: "gainsboro",
                paddingBottom: 55, borderRadius: 10, width: "90%"
              }}>
              <hr />
              <form onSubmit={this.agregarTweet}>
                <div className="form-group">
                  <label for="message">Escribe tu mensaje</label>
                  <input type="text" className="form-control" id="message" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Mensaje" value={this.state.message} />
                  <small id="topicHelp" className="form-text text-muted">Puedes incluir un tema usando #Tema.</small>
                </div>
                <button type="submit" className="btn btn-dark float-right">Enviar</button>
              </form>
            </div>

            <div className="container">
              <hr />
              {this.state.tweets.map(tweet => {
                return (
                  <TweetCard id={tweet._id} username={tweet.username} date={tweet.date} message={tweet.message} eliminarTweet={this.eliminarTweet} editarTweet={this.editarTweet} />
                )
              })}
            </div>
          </Route>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={AllTweets} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
        </Switch>



      </div>
    );
  }
}

export default App;
