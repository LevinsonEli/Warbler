import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside =({profileImageUrl, username}) => (
    <aside className="userAside">
                <img 
                    src={profileImageUrl || DefaultProfileImg} 
                    alt={username}
                    className="userAside"
                />
                <p>@{username}</p>
    </aside>
)

export default UserAside;