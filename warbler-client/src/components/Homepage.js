import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({currentUser}) => {
    if (!currentUser.isAuthenticated) {
        return (
            <div className="home-hero">
                <h1>What's Up?</h1>
                <h4>New to Warbler?</h4>
                <p className="signupButon">
                    <Link to="/signup">
                        <i className="fas fa-user-plus"></i>
                        Sign up here
                    </Link>
                </p>
            </div> 
        )
    }
    return (
        <div>
            <MessageTimeline 
                profileImageUrl={currentUser.user.profileImageUrl}
                username={currentUser.user.username}
            />
        </div>
    )   
}

export default Homepage;