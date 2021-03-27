import React, { Component } from "react";
import "./MiniClock.css";

export default class MiniClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clocktime: props.clocktime,
            timeZone: props.timeZone,
            title: props.title,
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
                <div className="miniClock">
                    <div
                        className="hour_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getHours() * 30}deg)`
                        }}
                    />
                    <div
                        className="min_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getMinutes() * 6}deg)`
                        }}
                    />
                    <div
                        className="sec_hand"
                        style={{
                            transform: `rotateZ(${this.state.clocktime.getSeconds() * 6}deg)`
                        }}
                    />
                    <span className="twelveMini">12</span>
                    <span className="oneMini">1</span>
                    <span className="twoMini">2</span>
                    <span className="threeMini">3</span>
                    <span className="fourMini">4</span>
                    <span className="fiveMini">5</span>
                    <span className="sixMini">6</span>
                    <span className="sevenMini">7</span>
                    <span className="eightMini">8</span>
                    <span className="nineMini">9</span>
                    <span className="tenMini">10</span>
                    <span className="elevenMini">11</span>
                </div>
            </div>

        );
    }
}
