import React from "react";
import ReactDOM from "react-dom";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            itemCount: 0,
        }
    }

    handleKeyPress(e) {
        if (e.charCode == 13) {
            this.addItem(e.target.value);
            e.target.value = '';
        }
    }

    addItem(content) {
        const newList = this.state.itemList;
        newList.unshift({
            content: content,
        });
        this.setState({
            itemList: newList,
            itemCount: newList.length,
        });
    }

    render() {
        return (
            <div id = "todo">
                <NewItem
                    onKeyPress = {
                        (e) => this.handleKeyPress(e)
                    }
                />
                <ItemList
                    itemList = { this.state.itemList }
                />
            </div>
        )
    }
}

module.exports = Todo;
