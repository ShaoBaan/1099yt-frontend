import React from 'react';
import ReactDOM from 'react-dom';

function NewItem(props) {
    return (
        <input
            id = "new-item"
            onKeyPress = {
                (e) => props.onKeyPress(e)
            }
            placeholder = "add a new item..."
        />
    );
}

module.exports = NewItem;
