import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="container"
              style={{
                backgroundColor: "gainsboro",
                paddingBottom: 55, borderRadius: 10, width: "90%"
              }}>
              <hr />
              <form onSubmit={this.register}>
                <div className="form-group">
                  <label for="message">Registrate</label>
                  <input type="text" className="form-control" id="username" onChange={this.handleChange} placeholder="Usuario" />
                  <input type="password" className="form-control" id="password" onChange={this.handleChange} placeholder="Contraseña" />
                  <input type="password" className="form-control" id="password2" onChange={this.handleChange} placeholder="Repite la contraseña" />
                </div>
                <button type="submit" className="btn btn-primary float-right">Crear cuenta</button>
              </form>
            </div>
        );
    }
}

export default Register;



