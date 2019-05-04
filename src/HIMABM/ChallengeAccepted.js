import React from "react";
import ReactDOM from "react-dom";
import NewItem from "./NewItem";
import ItemList from "./ItemList";
import TodaysChallenges from "./TodaysChallenges";

class ChallengeAccepted extends React.Component {

    render() {
        if (!this.props.accepted) {
            return (
                <div id = "challengAccepted" className = "pane">
                    <span className = "title">
                        Challenge Accepted
                    </span>
                    <div className = "content-body">
                        <span className = "entry">
                            Challenge
                        </span>
                        <span className = "entry">
                            Score
                        </span>
                        <NewItem
                            onAddItem = {
                                (e) => this.props.onHandleAddItem(e)
                            }
                        />
                        <ItemList
                            itemList = { this.props.itemList }
                            onDelete = {
                                (e) => this.props.handleDeleteItem(e)
                            }
                        />
                        <button
                            className = "confirm-button"
                            onClick = {
                                (e) => this.props.onClickConfirm(e)
                            }
                        >
                            confirm
                        </button>
                    </div>

                </div>
            )
        } else {
            return (
                <TodaysChallenges
                    itemList = { this.props.itemList }
                />
            )
        }

    }
}

module.exports = ChallengeAccepted;
