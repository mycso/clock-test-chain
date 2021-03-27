import React, { Component } from "react";
import "./BigClock.css";

export default class BigClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clocktime: props.clocktime,
            timeZone: props.timeZone,
            title: props.title
        };
    }

    //include life cycle method to get the time and time zone
    componentDidMount() {
        this.timerId = setInterval(() => {
            const currentTime = new Date()
            currentTime.setHours(currentTime.getHours() + this.state.timeZone)
            this.setState({
                clocktime: currentTime
            });
        }, 1000);
    }

    //clear the set interval
    componentWillMount() {
        clearInterval(this.timerId);
    }



    render() {

        let hourAlert = ""

        // Alert the hour of the mini clocks
        if (this.state.clocktime.getMinutes() == 0 && this.state.clocktime.getSeconds() == 0) {
            hourAlert = `Its ${this.state.clocktime.getHours()} o' clock`
            console.log(hourAlert);
        }

        return (


            <div>
                <h1>{this.state.title}</h1>
                <p>{hourAlert}</p>
                <div className="bigClock">
                    <div
                        className="big_hour_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getHours() * 30}deg)`
                        }}
                    />
                    <div
                        className="big_min_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className="big_sec_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getSeconds() * 6}deg)`
                        }}
                    />
                    <span className="twelveMain">12</span>
                    <span className="oneMain">1</span>
                    <span className="twoMain">2</span>
                    <span className="threeMain">3</span>
                    <span className="fourMain">4</span>
                    <span className="fiveMain">5</span>
                    <span className="sixMain">6</span>
                    <span className="sevenMain">7</span>
                    <span className="eightMain">8</span>
                    <span className="nineMain">9</span>
                    <span className="tenMain">10</span>
                    <span className="elevenMain">11</span>
                </div>
            </div>

        );
    }
}
