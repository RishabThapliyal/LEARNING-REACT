import React from "react";

export default function Card(props) {
    return (
    <div className="outer">
        <div className="card">
            <div className="header"></div>

            <div className="profile">
            <img src="https://i.pravatar.cc/150" alt="profile" />
            </div>

            <h3>{props.Name}</h3>
            <p className="role">{props.Role}</p>

            <div className="stats">
            <div>
                <h4>{props.NoOfFollowers}</h4>
                <span>Followers</span>
            </div>
            <div>
                <h4>{props.NoOfFollowing}</h4>
                <span>Following</span>
            </div>
            </div>

            <div className="actions">
            <button className="follow">Follow</button>
            <button className="message">Message</button>
            </div>
        </div>

        <div className="dots">
            <span className="c1"></span>
            <span className="c2"></span>
            <span className="c3"></span>
            <span className="c4"></span>
            <span className="c5"></span>
        </div>
        </div>
    );
}
