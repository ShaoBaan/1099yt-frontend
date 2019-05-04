import React from "react";
import ReactDOM from "react-dom";
import ChallengeCheckItem from "./ChallengeCheckItem";

class Legendary extends React.Component {
    renderItems() {
        let res = [];
        res = this.props.itemList.map((item, idx) =>
            <ChallengeCheckItem
                content = { item.content }
                setTime = {
                    (e, idx) => this.props.setTime(e)
                }
                key = { item.index.toString() }
                index = { idx }
            />
        );
        return res;
    }

    render() {
        if (this.props.accepted) {
            if (!this.props.checkedOut) {
                return (
                    <div id = "Legendary" className = "pane">
                        <span className = "title">
                            Legendary
                        </span>
                        <div className = "content-body">
                            <span className = "entry">
                                Challenge
                            </span>
                            <span className = "entry">
                                Score
                            </span>
                            <span className = "entry">
                                Time
                            </span>
                            <form
                                onSubmit = { this.props.onSubmit }
                            >
                                <ul id = "legendary">
                                    { this.renderItems() }
                                </ul>
                                <button type = "submit" className = "confirm-button">confirm</button>
                            </form>
                        </div>

                    </div>
                )
            } else {
                return (
                    <div className = "pane">
                        <span className = "title">
                            Legendary
                        </span>
                        <div className = "content-body">
                            <span>
                                Congratulations! You've completed today's challenges.
                            </span>
                            <br/>
                            <span>You earned </span>
                            <span className = "number">
                                { this.props.earned }
                            </span>
                            <span>points today, the current balance is</span>
                            <span className = "number">
                                { this.props.balance }
                            </span>.
                        </div>
                    </div>
                )
            }

        } else {
            return (
                <div className = "pane">
                    <span className = "title">
                        Legendary
                    </span>
                    <div className = "content-body">
                        Please set up today's challenges.
                    </div>
                </div>
            )
        }

    }
}

module.exports = Legendary;
