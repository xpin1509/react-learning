import React, { Component } from 'react';
import './index.css'
import Clock from './Clock.js';
import ActionLink from './ActionLink.js'
import LoginControl from './LoginControl.js';
import NameForm from './NameForm.js';
import Calculator from './Calculator.js';
import WelcomeDialog from './WelcomeDialog.js';

class Index extends Component {
    render() {
        return (
            <div className="practiseBar">
                <Clock /><br />
                <ActionLink /><br />
                <LoginControl /><br />
                <NameForm /><br />
                <Calculator /><br />
                <WelcomeDialog />
            </div>
        )
    }
}
 export default Index