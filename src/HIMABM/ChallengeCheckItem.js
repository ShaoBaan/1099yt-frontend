import React from "react";
import ReactDOM from "react-dom";

class ChallengeCheckItem extends React.Component {

    render() {
        return (
            <li className = "item">
                <span className = "field">
                    { this.props.content.challenge }
                </span>
                <span className = "field center"> 
                    { this.props.content.score }
                </span>

                <input
                    placeholder = "Time spent on it..."
                    onChange = { this.props.setTime }
                    index = { this.props.index }
                >
                </input>
            </li>
        )
    }
}

module.exports = ChallengeCheckItem;
