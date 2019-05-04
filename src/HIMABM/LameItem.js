import React from "react";
import ReactDOM from "react-dom";

class LameItem extends React.Component {

    render() {
        return (
            <li className = "item">
                <span className = "field">
                    { this.props.content.gratification }
                </span>
                <span className = "field">
                    { this.props.content.price }
                </span>
                <button
                    index = { this.props.index }
                    onClick = { this.props.onClick }
                    className = "add-button"
                >
                    <i className ="fas fa-shopping-cart"></i>
                </button>
            </li>
        )
    }
}

module.exports = LameItem;
