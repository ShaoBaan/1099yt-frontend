import React from "react";
import ReactDOM from "react-dom";
import Profile from "./Profile";
import ChallengeAccepted from "./ChallengeAccepted";
import Legendary from "./Legendary";
import Lame from "./Lame";

class Window extends React.Component {

    constructor(props) {
        super(props);
        const initChallenges = [{
            content: {
                challenge: "English",
                score: 2,
                time: 0
            },
            key: 0,
            index: 0,
        }, {
            content: {
                challenge: "Work out",
                score: 2,
                time: 0
            },
            key: 1,
            index: 1,
        }, {
            content: {
                challenge: "Coding",
                score: 3,
                time: 0
            },
            key: 2,
            index: 2
        }];
        const lameItems = [{
            content: {
                gratification: "video game",
                price: 10
            },
            key: 0
        }];
        this.state = {
            itemList: initChallenges,
            itemCount: 0,
            accepted: false,
            lameItems: lameItems,
            balance: 5,
            checkedOut: false,
            earned: 0
        }
    }

    handleConfirm(e) {
        this.setState({
            accepted: true
        });
    }

    handleAddItem(e) {
        e.preventDefault();
        const newList = this.state.itemList;
        const itemCount = this.state.itemCount;
        const content = {
            challenge: e.target.challenge.value,
            score: e.target.score.value,
            time: 0
        }
        newList.unshift({
            content: content,
            key: itemCount,
            index: itemCount,
        });
        this.setState({
            itemList: newList,
            itemCount: itemCount + 1,
        });
        e.target.reset();
    }

    handleAddLameItem(e) {
        e.preventDefault();
        const newLameItems = this.state.lameItems;
        const content = {
            gratification: e.target.gratification.value,
            price: e.target.price.value
        }
        newLameItems.unshift({
            content: content,
            key: newLameItems.length,
        });
        this.setState({
            lameItems: newLameItems
        });
        console.log(newLameItems);
        e.target.reset();
    }

    handleDeleteItem(index) {
        const newList = this.state.itemList.filter(
            (item) => (item.index != index)
        );

        this.setState({
            itemList: newList
        });
    }

    handleLegendarySubmit(e) {
        e.preventDefault();
        let earned = 0;
        let balance = this.state.balance;
        let list = this.state.itemList;
        for (var i = 0; i < list.length; i++) {
            earned += list[i].content.score * list[i].content.time;
        }

        this.setState({
            balance: balance + earned,
            earned: earned,
            checkedOut: true
        })
    }

    handleSetTime(e) {
        console.log(e.target);
        const newItemList = this.state.itemList;
        let totalScore = 0;
        let idx = parseInt(e.target.getAttribute("index"));
        newItemList[idx].content.time = e.target.value;
        this.setState({
            itemList: newItemList
        })
    }

    handleBuyOne(e) {
        let list = this.state.lameItems;
        let balance = this.state.balance;
        let idx = parseInt(e.currentTarget.getAttribute("index"));
        let price = parseInt(list[idx].content.price);
        if (balance < price) {
            alert("Your balance is not enough!");
        } else {
            this.setState({
                balance: balance - price
            })
        }
    }

    render() {
        let profile = (<Profile
            balance = { this.state.balance }
        />);
        let challengeAccepted = (<ChallengeAccepted
            accepted = { this.state.accepted }
            itemList = { this.state.itemList }
            onClickConfirm = {
                (e) => { this.handleConfirm(e) }
            }
            onHandleAddItem = {
                (e) => { this.handleAddItem(e)}
            }
            handleDeleteItem = {
                (e) => { this.handleDeleteItem(e)}
            }
                                 />);
        let legendary = (<Legendary
            itemList = { this.state.itemList }
            accepted = { this.state.accepted }
            earned = { this.state.earned }
            balance = { this.state.balance }
            onSubmit = {
                (e) => { this.handleLegendarySubmit(e) }
            }
            setTime = {
                (e, idx) => { this.handleSetTime(e, idx) }
            }
            checkedOut = { this.state.checkedOut }
        />);
        let lame = (<Lame
            addLameItem = {
                (e) => this.handleAddLameItem(e)
            }
            onBuyOne = {
                (e) => this.handleBuyOne(e)
            }
            lameItemList = { this.state.lameItems }
        />);
        switch (this.props.currentActivated) {
            case 0:
                return (
                    <div id = "window">
                        { profile }
                    </div>
                );
                break;
            case 1:
                return (
                    <div id = "window">
                        { challengeAccepted }
                    </div>
                );
                break;
            case 2:
                return (
                    <div id = "window">
                        { legendary }
                    </div>
                );
                break;
            case 3:
                return (
                    <div id = "window">
                        { lame }
                    </div>
                );
                break;
            default:
                return (
                    <div id = "window">
                        this is window.
                    </div>
                )
                break;
        }

    }
}

module.exports = Window;
