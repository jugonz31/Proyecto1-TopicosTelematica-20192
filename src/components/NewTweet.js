import React, { Component } from 'react';

class NewTweet extends Component {
    constructor() {
        super();
        this.state = {
            user: '@juan',
            message: ''
        }
        this.handleImput = this.handleImput.bind(this);
        this.postTweet = this.postTweet.bind(this);
    }


    handleImput(e) {
        const { value, id } = e.target;
        this.setState({
            [id]: value
        })
        console.log(this.state)
    }

    postTweet(e) {
        e.preventDefault();
        this.props.onNewTweet(this.state)
        console.log("enviando")
    }

    render() {
        return (
            <div className="card" style={{ width: "90%", margin: "auto" }}>
                <form className="card-body" onSubmit={this.postTweet}>
                    <label for="message"><h4>Nuevo tweet</h4></label>
                    <div className="row" style={{ margin: "auto" }}>

                        <input type="text"
                            className="form-control"
                            id="message"
                            placeholder="Escribe un mensaje"
                            onChange={this.handleImput} />

                    </div>
                    <div className="row" style={{ marginTop: "10px" }}>
                        <div className="col">
                            <button type="submit" className="btn btn-primary mb-2">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewTweet;