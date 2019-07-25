import React, { Component } from 'react';
import './App.css';

import { todos } from './task.json'
import NewTweet from './components/NewTweet.js'
import Tweet from './components/Tweet.js'
console.log(todos);

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  handleNewTweet(a){
    this.setState({
      todos : [...this.state.todos, a]
    })
  }
  
  render() {
    const tweets = this.state.todos.map((tweet, i) => {
      return (
        <Tweet user={tweet.user} message={tweet.message}/>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Twitter
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <NewTweet onNewTweet={this.handleNewTweet}/>
          </div>

          <div className="row mt-2">
            {tweets}
          </div>
        </div>
        <div className="footer" 
        style={{ marginTop: "50px", marginBottom: "20px" }}>Universidad Eafit</div>
      </div>
    );
  }
}

export default App;
