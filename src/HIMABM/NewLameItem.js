import React from 'react';
import ReactDOM from 'react-dom';

function NewLameItem(props) {
    return (
        <form onSubmit = { props.onAddItem }>
            <input
                name = "gratification"
                placeholder = "add a new item..."
            />
            <input
                name = "price"
                placeholder = "score(points per hour)"
            />
            <button type = "submit" className = "add-button">
                <i className ="fas fa-plus"></i>
            </button>
        </form>
    );
}

module.exports = NewLameItem;
