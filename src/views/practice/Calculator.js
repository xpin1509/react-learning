import React, { Component } from 'react';
// 状态提升

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
}
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        return (
            <div>
                <input value={temperature} onChange={(e) => { this.handleChange(e) }} />°{this.props.scale}
            </div>
        )
    }
}
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
    }

    handleChange(val) {
        this.setState({ temperature: val });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={temperature} onTemperatureChange={(val) => { this.handleChange(val) }} />
                <TemperatureInput scale="f" temperature={temperature} onTemperatureChange={(val) => { this.handleChange(val) }} />
                <BoilingVerdict scelsius={parseFloat(temperature)} />
            </div>
        )
    }
}

export default Calculator