import React, { Component } from 'react';
// 条件渲染

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
      </button>
    );
}
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={(e) => { this.handleLogoutClick() }} />;
        } else {
            button = <LoginButton onClick={(e) => { this.handleLoginClick() }} />;
        }

        return (
            <div>
                {button}
            </div>
        );
    }
}

export default LoginControl