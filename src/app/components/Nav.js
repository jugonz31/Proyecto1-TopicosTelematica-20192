import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {
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
                            <li className="nav-item mr-2">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/logout">Logout</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/register">Register</Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/my-tweets">My Tweets</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;



