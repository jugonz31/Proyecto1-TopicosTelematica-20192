import React, { Component } from 'react';
import TweetCardBasic from './TweetCardBasic';

class AllTweets extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      searchString: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.busqueda = this.busqueda.bind(this)
  }

  componentDidMount() {
    this.obtenerTweets();
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  }

  busqueda(e) {
    e.preventDefault();
    fetch('api/tweets/topic/' + this.state.searchString)
      .then(res => res.json())
      .then(data => {
        this.setState({ tweets: data })
      });
  }

  obtenerTweets() {
    fetch('api/tweets')
      .then(res => res.json())
      .then(data => {
        this.setState({ tweets: data })
      });
  }

  render() {
    return (
      <div>
        <div className="container mt-3">
          <form className="form-inline my-2 my-lg-0" onSubmit={this.busqueda}>
            <input className="form-control mr-sm-2" type="search" id="searchString" placeholder="#Tema" onChange={this.handleChange}/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
        </div>


        <hr />
        <div className="container">
          <hr />
          {this.state.tweets.map(tweet => {
            return (
              <TweetCardBasic id={tweet._id} username={tweet.username} date={tweet.date} message={tweet.message} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default AllTweets;



