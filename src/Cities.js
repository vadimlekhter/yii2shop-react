import React from 'react';

class Time extends React.Component {
    render() {
        let timeStyle = {
            size: 10,
            color: 'yellow',
            fontWeight: 'bold'
        }
        return (
            <p style={timeStyle}>{this.props.time}</p>
        )
    }
}

class City extends React.Component {
    render() {
        let cityStyle = {
            size: 10,
            color: 'white',
            fontWeight: 'bold'
        }
        return (
            <p style={cityStyle}>{this.props.city}</p>
        )
    }
}

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                time: '00:00:00',
                colors: ["#64390d", "#E94F37", "#1C89BF", "#3f4c29"],
                bgColorMoscow: 0,
                bgColorLondon: 1,
                bgColorNewYork: 2,
                bgColorTokyo: 3,
            }
        this.changeTimeColor = this.changeTimeColor.bind(this);
        this.timeCircle = this.timeCircle.bind(this);
    }

    timeCircle(t) {
        if (t > 0) {
            return t - 1
        } else return 3
    }

    changeTimeColor() {
        let delta;
        let turn;
        let color;
        switch (this.props.city) {
            case 'Moscow':
                delta = 0;
                turn = this.state.bgColorMoscow;
                color = this.timeCircle(turn);

                this.setState({
                        bgColorMoscow: color,
                        bgColor: this.state.colors[color]
                    }
                )
                break;
            case 'London':
                delta = -3;
                turn = this.state.bgColorLondon;
                color = this.timeCircle(turn);
                this.setState({
                        bgColorLondon: color,
                        bgColor: this.state.colors[color]
                    }
                )
                break;
            case 'New York':
                delta = -8;
                turn = this.state.bgColorNewYork;
                color = this.timeCircle(turn);
                this.setState({
                        bgColorNewYork: color,
                        bgColor: this.state.colors[color]
                    }
                )
                break;
            case 'Tokyo':
                delta = 9;
                turn = this.state.bgColorTokyo;
                color = this.timeCircle(turn);
                this.setState({
                        bgColorTokyo: color,
                        bgColor: this.state.colors[color]
                    }
                )
                break;
            default:
                delta = 0;
                break;
        }

        let Data = new Date();
        let Hours = Data.getHours() + delta;
        if (Hours >= 0) {
            Hours = (Hours % 24).toString();
        } else {
            Hours = 24 + Hours;
        }
        let Minutes = Data.getMinutes().toString();
        let Seconds = Data.getSeconds().toString();
        if (Hours.length === 1) {
            Hours = '0' + Hours;
        }
        if (Minutes.length === 1) {
            Minutes = '0' + Minutes;
        }
        if (Seconds.length === 1) {
            Seconds = '0' + Seconds;
        }
        let timeNow = Hours + ":" + Minutes + ":" + Seconds;

        this.setState({
                time: timeNow,
            }
        )
    }

    componentDidMount() {
        setInterval(this.changeTimeColor, 1000);
    }

    render() {
        let circleStyle = {
            margin: 20,
            display: "inline-block",
            textAlign: 'center',
            verticalAlign: 'middle',
            backgroundColor: this.state.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100,
        };
        return (
            <div style={circleStyle}>
                <Time time={this.state.time}/>
                <City {...this.props}/>
            </div>
        );
    }

}

export {Time, City, Circle};