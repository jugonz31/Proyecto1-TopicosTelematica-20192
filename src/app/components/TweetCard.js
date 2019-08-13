import React, { Component } from 'react';

class TweetCard extends Component {
    render() {
        return (
                <div className="card mb-3" id={this.props.id} style={{width:"100%"}}>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.username}</h5>
                        <h6 className="card-subtitle mb-2 text-muted small">{this.props.date}</h6>
                        <p className="card-text">"{this.props.message}"</p>
                        <button type="button" className="btn btn-danger float-right ml-1" onClick={() => this.props.eliminarTweet(this.props.id)}>Eliminar</button>
                        <button type="button" className="btn btn-primary float-right"  onClick={() => this.props.editarTweet(this.props.id)}>Editar</button>
                        
                    </div>
                </div>
        );
    }
}

export default TweetCard;



