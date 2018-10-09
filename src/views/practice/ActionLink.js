import React, { Component } from 'react';
// 3.jsx的this指向

class ActionLink extends Component {
    handleClick(e) {
        console.log(this)
        e.preventDefault();
    }
    render() {
        /* 无需bind(this)有两种方案  
          1.箭头函数
          2.回调
          详见 https://reactjs.org/docs/handling-events.html
        */
        return (
            <div onClick={(e) => this.handleClick(e)}>
                Click me
            </div>
        );
    }
}
export default ActionLink;