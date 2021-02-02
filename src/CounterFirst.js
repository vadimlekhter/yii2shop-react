import React from 'react';

class Button extends React.Component {
    render() {
        let buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            <button onClick={this.props.clickHandler} style={buttonStyle}>+</button>
        )
    }
}

class Counter extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#e2dddd",
            fontWeight: "bold"
        };
        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}

class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase(e) {
        if (e.shiftKey) {
            this.setState(
                {
                    count: this.state.count + 10
                })
        } else this.setState(
            {
                count: this.state.count + 1
            })
    }

    render() {
        let backgroundStyle = {
            padding: 30,
            paddingTop: 10,
            backgroundColor: "#3d97ac",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        let buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count}/>
                {/*<button onClick={this.increase} style={buttonStyle}>+</button>*/}
                <Button style={buttonStyle} clickHandler={this.increase}/>
            </div>
        );
    }
}

export {Button, Counter, CounterParent};