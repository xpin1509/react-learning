import React, { Component } from 'react';
// 1.自动更新的时钟显示

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div>
                <h1> Hello World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
export default Clock