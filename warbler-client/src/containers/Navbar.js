import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler/warbler-logo.png";

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar bavbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Logo" />
                        </Link>
                    </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

function mapStateTpProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateTpProps, null)(Navbar);