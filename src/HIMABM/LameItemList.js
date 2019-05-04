import React from "react";
import ReactDOM from "react-dom";
import LameItem from "./LameItem";

class LameItemList extends React.Component {

    renderItems() {
        let res = [];
        res = this.props.lameItemList.map((item, idx) =>
            <LameItem
                content = { item.content }
                key = { idx }
                index = { idx }
                onClick = {
                    (e) => { this.props.onBuyOne(e) }
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

module.exports = LameItemList;
