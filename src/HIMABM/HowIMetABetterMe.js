import React from "react";
import ReactDOM from "react-dom";
import DashBoard from "./DashBoard";
import Window from "./Window";

class HowIMetABetterMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivated: 0,
        }
    }

    toggleWindow(e) {
        if (e.target.tagName != "LI") return;
        const newActivated = parseInt(e.target.getAttribute('num'));
        this.setState({
            currentActivated: newActivated
        });
    }

    render() {
        return (
            <div id = "HIMIBM">
                <DashBoard
                    onToggleWindow = {
                        (e) => this.toggleWindow(e)
                    }
                />
                <Window
                    currentActivated = { this.state.currentActivated }
                />
            </div>
        )
    }
}

module.exports = HowIMetABetterMe;
