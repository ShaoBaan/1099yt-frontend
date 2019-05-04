import React from "react";
import ReactDOM from "react-dom";

class Profile extends React.Component {
    render() {
        return (
            <div id = "Profile" className = "pane">
                <span className = "title">
                    Profile
                </span>
                <div className = "content-body">
                    Your balance is
                    <span className = "number">
                        { this.props.balance }
                    </span>.

                </div>
            </div>
        )
    }
}

module.exports = Profile;
