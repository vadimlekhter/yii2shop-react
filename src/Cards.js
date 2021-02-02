import React from 'react';

class LabelHex extends React.Component {
    render() {
        let labelHexStyle = {
            height: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "sans-serif",
            fontWeight: "bold",
            fontSize: 10
        }
        return (
            <>
                <div style={labelHexStyle}>
                    {this.props.colorHex}
                </div>
                <a style={labelHexStyle} href={this.props.href} target={window}>Yandex</a>
            </>
        )
    }
}

class LabelText extends React.Component {
    render() {
        let labelTextStyle = {
            height: 25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "sans-serif",
            fontWeight: "bold",
        }
        return (
            <div style={labelTextStyle}>
                {this.props.colorText}
            </div>
        )
    }
}

class Label extends React.Component {
    render() {
        let labelStyle = {
            height: 50
        }
        return (
            <div style={labelStyle}>
                <LabelHex {...this.props}/>
                <LabelText {...this.props}/>
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        let squareStyle = {
            height: 150,
            backgroundColor: this.props.colorHex
        };
        return (
            <div style={squareStyle}>

            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        let cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #666"
        };
        return (
            <div style={cardStyle}>
                <Square {...this.props}/>
                <Label {...this.props}/>
            </div>
        )
    }
}

export {Card, LabelHex, Label, LabelText, Square};