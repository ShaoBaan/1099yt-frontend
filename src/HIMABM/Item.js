import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component {
    render() {
        return (
            <li className = "item">
                <span className = "field"> { this.props.content.challenge } </span>
                <span className = "field"> { this.props.content.score } </span>
                <button className = "delete-button"
                        onClick = {
                            (e) => {
                                let index = this.props.index;
                                this.props.onClick(index);
                            }
                        }
                    >
                        <i className ="far fa-trash-alt"></i>
                </button>
            </li>
        )
    }
}

module.exports = Item;
