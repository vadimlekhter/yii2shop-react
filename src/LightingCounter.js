import React from 'react';

class LightningCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            color: 'lightgreen'
        };
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        if (this.state.strikes / 100 % 2 === 0) {
            this.setState({
                strikes: this.state.strikes + 100,
                color: 'forestgreen'
            });
        } else {
            this.setState({
                strikes: this.state.strikes + 100,
                color: 'lightgreen'
            });
        }
        // this.setState((prevState) => {
        //     return {
        //         strikes: prevState.strikes + 100
        //     };
        // });
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        return (
            <h1>
                {this.props.strikes}
            </h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            color: 'lightgreen'
        };
        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        if (this.state.strikes / 100 % 2 === 0) {
            this.setState({
                strikes: this.state.strikes + 100,
                color: 'lightblue'
            });
        } else {
            this.setState({
                strikes: this.state.strikes + 100,
                color: 'lightgreen'
            });
        }
        // this.setState((prevState) => {
        //     return {
        //         strikes: prevState.strikes + 100
        //     };
        // });
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        let divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: this.state.color,
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };
        return (
            <div style={divStyle}>
                <LightningCounter strikes={this.state.strikes}/>
            </div>
        );
    }
}

export {LightningCounterDisplay, LightningCounter};