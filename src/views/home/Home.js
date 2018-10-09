import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import TimeLine from './TimeLine.js';
import './home.css';

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            showList: true,
            timeList: [{
                status: 1,
                state: 'Create a services site 2015-09-01'
            },
            {
                status: 1,
                state: 'Create a services site 2015-09-01'
            },
            {
                status: 1,
                state: 'Solve initial network problems 1'
            },
            {
                status: 0,
                state: 'success'
            }]
        }
    }
    changeData(value) {
        console.log(value)
    }
    render() {
        const timeLine = this.state.showList ? <TimeLine data={this.state.timeList}/> : ''
        return (
            <div className="homePage">
                <h3 className="homeTitle">快递单号查询</h3>
                <SearchBar changeData={ this.changeData.bind(this) }/>
                { timeLine }
            </div>
        )
    }
}
export default Home