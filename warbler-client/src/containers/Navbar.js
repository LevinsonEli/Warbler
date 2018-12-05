import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler/warbler-logo.png";
import { logout } from "../store/actions/auth";

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render () {
        return (
            <nav className="navbar bavbar-expand">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="Warbler Home" />
                        </Link>
                    </div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav-navbav-nav navbar-rigth">
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                <a onClick={this.logout}>Log Out</a>
                            </li>
                        </ul>
                    ):
                    (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/signup">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign in</Link>
                            </li>
                        </ul>
                    )
                    }
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

export default connect(mapStateTpProps, {logout})(Navbar);