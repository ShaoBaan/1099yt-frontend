import React from "react";
import ReactDOM from "react-dom";
import NewLameItem from "./NewLameItem";
import LameItemList from "./LameItemList";

class Lame extends React.Component {
    render() {
        return (
            <div id = "Lame" className = "pane">
                <span className = "title">
                    Lame Store
                </span>
                <div className = "content-body">
                    <span className = "entry">
                        Lame
                    </span>
                    <span className = "entry">
                        Price
                    </span>
                    <NewLameItem
                        onAddItem = {
                            (e) => this.props.addLameItem(e)
                        }
                    />
                    <LameItemList
                        lameItemList = { this.props.lameItemList }
                        onBuyOne = {
                            (e) => this.props.onBuyOne(e)
                        }
                    />
                </div>

            </div>
        )
    }
}

module.exports = Lame;
