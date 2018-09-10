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

    handleAddItem(e) {
        if (e.charCode == 13) {
            const newList = this.state.itemList;
            const itemCount = this.state.itemCount;
            newList.unshift({
                content: e.target.value,
                key: itemCount,
                index: itemCount,
            });
            this.setState({
                itemList: newList,
                itemCount: itemCount + 1,
            });
            e.target.value = '';
        }
    }

    handleDeleteItem(index) {
        const newList = this.state.itemList.filter(
            (item) => (item.index != index)
        );

        this.setState({
            itemList: newList
        });
    }


    render() {
        return (
            <div id = "todo">
                <NewItem
                    onKeyPress = {
                        (e) => this.handleAddItem(e)
                    }
                />
                <ItemList
                    itemList = { this.state.itemList }
                    onClick = {
                        (e) => this.handleDeleteItem(e)
                    }
                />
            </div>
        )
    }
}

module.exports = Todo;
