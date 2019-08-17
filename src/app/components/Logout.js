import React, { Component } from 'react';

class Logout extends Component {
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
                  <label for="message">¿Esta seguro de que desea salir?</label>
                </div>
                <button type="submit" className="btn btn-danger float-right">Si</button>
              </form>
            </div>
        );
    }
}

export default Logout;



