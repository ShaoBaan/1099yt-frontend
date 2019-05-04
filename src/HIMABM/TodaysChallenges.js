import React from "react";
import ReactDOM from "react-dom";

class TodaysChallenges extends React.Component {
    renderItems() {
        let res = [];
        res = this.props.itemList.map((item, idx) =>
            <li
                key = { idx }
                className = "item"
            >
                <span className = "field"> { item.content.challenge }</span>
                <span className = "field center"> { item.content.score }</span>
            </li>
        );
        return res;
    }
    render() {
        return (
            <div>
                <span className = "title">
                    Today's Challenges
                </span>
                <div className = "content-body">
                    <span className = "entry">
                        Challenge Name
                    </span>
                    <span className = "entry">
                        Score
                    </span>
                    <ol>
                        { this.renderItems() }
                    </ol>
                </div>
            </div>
        )
    }

}

module.exports = TodaysChallenges;
