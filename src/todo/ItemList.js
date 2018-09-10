import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

class ItemList extends React.Component {

    renderItems() {
        let res = [];
        res = this.props.itemList.map((item) =>
            <Item
                content = { item.content }
                key = { item.index.toString() }
                index = { item.index.toString() }
                onClick = {
                    (key) => this.props.onClick(key)
                }
            />
        );
        return res;
    }

    render() {
        return (
            <ul>
                { this.renderItems() }
            </ul>
        )
    }
}

module.exports = ItemList;
