import React from "react";
import ReactDOM from "react-dom";

class DashBoard extends React.Component {

    render() {
        return (
            <div id = "dash-board">
                <ul
                    onClick = {
                        (e) => this.props.onToggleWindow(e)
                    }
                >
                    <li
                        num = "0"
                        className = "dash-button"
                    >
                        Profile
                    </li>

                    <li
                        num = "1"
                        className = "dash-button"
                    >
                        Challenges
                    </li>

                    <li
                        num = "2"
                        className = "dash-button"
                    >
                        Legendary
                    </li>

                    <li
                        num = "3"
                        className = "dash-button"
                    >
                        Lame
                    </li>
                </ul>
            </div>
        )
    }
}

module.exports = DashBoard;
