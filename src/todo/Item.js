import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component {
    render() {
        return (
            <li>
                { this.props.content }
            </li>
        )
    }
}

module.exports = Item;
