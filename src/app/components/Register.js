import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      password2: ''
    }
    this.registerUser = this.registerUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  registerUser(e) {
    e.preventDefault()
    fetch('/user/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ username: '', password: '', password2: '' })
        alert("Usuario registrado! Ahora puedes ingresar desde la opcion \"login\"")
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
        <form onSubmit={this.registerUser}>
          <div className="form-group">
            <label for="message">Registrate</label>
            <input type="text" className="form-control mb-2" id="username" onChange={this.handleChange} placeholder="Usuario" />
            <input type="password" className="form-control mb-2" id="password" onChange={this.handleChange} placeholder="Contraseña" />
            <input type="password" className="form-control mb-2" id="password2" onChange={this.handleChange} placeholder="Repite la contraseña" />
          </div>
          <button type="submit" className="btn btn-primary float-right">Crear cuenta</button>
        </form>
      </div>
    );
  }
}

export default Register;



