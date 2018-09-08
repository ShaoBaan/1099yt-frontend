import ReactDOM from 'react-dom';
import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const element = (
            <div>
                <h2> Tick </h2>
            <p> It is { this.state.date.toLocaleTimeString() } </p>
            </div>
        )
        return element;
    }
}

module.exports = Clock;
