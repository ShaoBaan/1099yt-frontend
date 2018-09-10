import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component {
    render() {
        return (
            <li>
                { this.props.content }
                <span
                    onClick = {
                        (e) => {
                            let index = this.props.index;
                            this.props.onClick(index);
                        }
                    }
                >
                    delete
                </span>
            </li>
        )
    }
}

module.exports = Item;
