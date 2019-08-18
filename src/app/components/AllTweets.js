import React, { Component } from 'react';
import TweetCardBasic from './TweetCardBasic';

class AllTweets extends Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    }
  }

  componentDidMount() {
    this.obtenerTweets();
  }

  obtenerTweets() {
    fetch('api/tweets')
    .then(res => res.json())
    .then(data => {
      this.setState({ tweets: data })
      console.log(this.state.tweets)
    });
  }

  render() {
    return (
      <div>
       <div className="container">
          <hr />
          {this.state.tweets.map(tweet => {
            return (
              <TweetCardBasic id={tweet._id} username={tweet.username} date={tweet.date} message={tweet.message}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default AllTweets;



