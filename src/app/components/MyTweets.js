import React, { Component } from 'react';

class MyTweets extends Component {
    render() {
        return (
            <div className="container"
              style={{
                backgroundColor: "gainsboro",
                paddingBottom: 55, borderRadius: 10, width: "90%"
              }}>
              <hr />
              <form onSubmit={this.login}>
                <div className="form-group">
                  <label for="message">Ingresa</label>
                  <input type="text" className="form-control" id="username" onChange={this.handleChange} placeholder="Usuario" />
                  <input type="password" className="form-control" id="username" onChange={this.handleChange} placeholder="Contraseña" />
                </div>
                <button type="submit" className="btn btn-dark float-right">Ingresar</button>
              </form>
            </div>
        );
    }
}

export default MyTweets;



