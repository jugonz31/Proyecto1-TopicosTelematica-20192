import React, { Component } from 'react'

class Tweet extends Component {
    render() {
        return (
            <div className="card mt-4 border-primary" style={{ width: "90%", margin: "auto" }}>
                <h6 className="card-header" style={{ textAlign: "left" }}>
                    {this.props.user}
                </h6>

                <div className="card-body">
                    <p className="card-text">
                        {this.props.message}
                    </p>
                </div>

                <div className="card-footer">
                    <button type="button" className="btn btn-primary btn-sm float-right">
                        Editar
                    </button>
                    <button type="button" className="btn btn-danger btn-sm float-right">
                        Eliminar
                    </button>
                </div>
                

            </div>
        )
    }
}

export default Tweet;