import React from 'react';
import ReactDOM from 'react-dom';

function NewItem(props) {
    return (
        <form onSubmit = {props.onAddItem}>
            <input
                name = "challenge"
                placeholder = "add a new item..."
            />
            <input
                name = "score"
                placeholder = "score(points per hour)"
            />
            <button type = "submit" className = "add-button">
                <i className ="fas fa-plus"></i>
            </button>
        </form>
    );
}

module.exports = NewItem;
