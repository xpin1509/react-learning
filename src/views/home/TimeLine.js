import React, { Component } from 'react';
import { Timeline } from 'antd';

class TimeLine extends Component {
    render() {
        const timeLine = this.props.data.map((el, index) => {
            return  <Timeline.Item key={index} color={el.status === 1 ? 'blue' : 'green'}>{el.state}</Timeline.Item>
        })
         return (
            <div className="timeLine">
                <Timeline>
                    {timeLine}
                </Timeline>
            </div>
      );
    }
}
export default TimeLine;