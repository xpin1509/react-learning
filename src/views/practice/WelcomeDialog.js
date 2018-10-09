import React, { Component } from 'react';
// 组合和继承
// 继承 facebook未用
function FancyBorder(props) {
    console.log(props)
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
class WelcomeDialog extends Component {
    render() {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
          </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft!
          </p>
            </FancyBorder>
        );
    }
}
export default WelcomeDialog