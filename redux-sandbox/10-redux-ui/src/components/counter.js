import React, {Component} from "react";

export default class Counter extends Component {

    render() {
        const counter = this.props.counter;
        const inc = this.props.inc;
        const dec = this.props.dec;
        const rnd = this.props.rnd;

        return (
            <div>
                <h2>{counter}</h2>
                <button onClick={dec}>DEC</button>
                <button onClick={inc}>INC</button>
                <button onClick={rnd}>RND</button>
            </div>
        )
    }
}