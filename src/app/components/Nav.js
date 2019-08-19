import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Nav extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn : false
        }
    }

    componentDidMount() {
        fetch('user/profile')
            .then(res => res.json())
            .then(data => {
                if (data != "") {
                    this.setState({
                        loggedIn : true
                    })
                }
            })
        console.log(this.state.loggedIn);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Twitter</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-2">
                                <Link to="/">Home</Link>
                            </li>
                            {this.state.loggedIn ?
                                <div>
                                    <li className="nav-item mr-2">
                                        <Link to="/logout">Logout</Link>
                                    </li>
                                    <li className="nav-item mr-2">
                                        <Link to="/my-tweets">My Tweets</Link>
                                    </li>
                                </div> : <div>
                                    <li className="nav-item mr-2">
                                        <Link to="/login">Login</Link>
                                    </li>

                                    <li className="nav-item mr-2">
                                        <Link to="/register">Register</Link>
                                    </li></div>}



                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;



