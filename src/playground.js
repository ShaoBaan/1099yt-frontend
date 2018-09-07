import ReactDOM from 'react-dom';
import React from "react";

function tick() {
    const element = (
        <div>
            <h2>Tick</h2>
        <p>It is { new Date().toLocaleTimeString() }</p>
        </div>
    );
    ReactDOM.render(element, document.getElementById('tick'));
    setInterval(tick, 1000);
}

module.exports = { "tick" : tick };
