import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
                            <h1 className="logoName btn">
                                <i className="fas fa-dove"></i>
                                <span>Warbler Messager</span>
                            </h1>
                        </Link>
                    </div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="navbarList">
                            <li>
                                <Link
                                    to={`/users/${this.props.currentUser.user.id}/messages/new`}
                                >
                                    <i className="fas fa-comment"></i>
                                    New Message
                                </Link>
                            </li>
                            <li>
                                <button className="a" onClick={this.logout}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    ):
                    (
                        <ul className="navbarList">
                            <li>
                                <Link to="/signup"><i className="fas fa-user-plus"></i>Sign up</Link>
                            </li>
                            <li>
                                <Link to="/signin"><i className="fas fa-sign-in-alt"></i>Sign in</Link>
                            </li>
                        </ul>
                    )
                    }
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {logout})(Navbar);