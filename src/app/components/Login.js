import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.loginUser = this.loginUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  loginUser(e) {
    fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ username: '', password: '' })
        window.location.replace("/")
      })
      .catch(err => console.log(err));
      
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  }


  render() {
    return (
      <div className="container"
        style={{
          backgroundColor: "gainsboro",
          paddingBottom: 55, borderRadius: 10, width: "90%"
        }}>
        <hr />
        <form onSubmit={this.loginUser}>
          <div className="form-group">
            <label for="message">Ingresa</label>
            <input id="username" type="text" className="form-control"  onChange={this.handleChange} placeholder="Usuario" />
            <input id="password" type="password" className="form-control"  onChange={this.handleChange} placeholder="Contraseña" />
          </div>
          <button type="submit" className="btn btn-dark float-right">Ingresar</button>
        </form>
      </div>
    );
  }
}

export default Login;



