import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";

class ItemList extends React.Component {

    renderItems() {
        let res = [];
        res = this.props.itemList.map((item) => {
            return (
                <Item
                    content = { item.content }
                />
            )
        });
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
