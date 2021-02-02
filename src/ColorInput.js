import React from 'react';
import ReactDOM from "react-dom";

class ColorInput extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.colorToRGBA = this.colorToRGBA.bind(this)
        this.colorToHex = this.colorToHex.bind(this)
        this.state = {
            newColor: '',
            bgColor: '',
            hexColor: '',
            rgbColor: ''
        }
    }

    colorToRGBA(color) {
        // Returns the color as an array of [r, g, b, a] -- all range from 0 - 255
        // color must be a valid canvas fillStyle. This will cover most anything
        // you'd want to use.
        // Examples:
        // colorToRGBA('red')  # [255, 0, 0, 255]
        // colorToRGBA('#f00') # [255, 0, 0, 255]
        let cvs, ctx;
        cvs = document.createElement('canvas');
        cvs.height = 1;
        cvs.width = 1;
        ctx = cvs.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
        let rgbColorUint = ctx.getImageData(0, 0, 1, 1).data;
        let rgbColor = [rgbColorUint[0], rgbColorUint[1], rgbColorUint[2]];
        if (rgbColor.join('') === '000' && color !== 'black') {
            rgbColor = 'No color';
            this.setState(
                {
                    rgbColor: rgbColor
                }
            )
        } else {
            this.setState(
                {
                    rgbColor: rgbColor.join(' ')
                }
            )
        }
        return rgbColorUint;
    }

    colorToHex(color) {
        // Convert any CSS color to a hex representation
        // Examples:
        // colorToHex('red')            # '#ff0000'
        // colorToHex('rgb(255, 0, 0)') # '#ff0000'
        let rgba, hex;
        rgba = this.colorToRGBA(color);
        hex = [0, 1, 2].map(
            function (idx) {
                return ('0' + rgba[idx].toString(16)).slice(-2)
            }
        ).join('');
        if (hex === '000000' && color !== 'black') {
            return 'No color'
        } else
            return "#" + hex;
    }

    onChange(e) {
        this.setState(
            {
                newColor: e.target.value
            }
        )
    }

    onSubmit(e) {
        let hexColor = this.colorToHex(this.state.newColor)
        let bgColor = this.state.newColor;
        if (hexColor === 'No color') {
            bgColor = 'black';
        }
        this.setState(
            {
                bgColor: bgColor,
                hexColor: hexColor
            }
        )
        this._input.focus();
        this._input.value = '';
        e.preventDefault();
    }

    render() {
        let wrapStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
        let squareStyle = {
            backgroundColor: this.state.bgColor,
            width: 300,
            height: 200,
            boxShadow: "0px 0px 5px #666",
            marginBottom: 20,
            paddingTop: 80,
            textAlign: 'center'
        }
        let hexStyle = {
            color: 'white',
            fontSize: 36
        }

        return (
            <div style={wrapStyle}>
                <div style={squareStyle}>
                    <p style={hexStyle}>RGB {this.state.rgbColor}</p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange}
                           ref={(el) => this._input = el}
                           placeholder='Type color...' type='text'/>
                    <input type='submit'/>
                </form>
                <ColorHeading hexColor={this.state.hexColor}/>
            </div>
        )
    }
}

let colorHeading = document.getElementById('colorHeading');

class ColorHeading extends React.Component {
    render() {
        return (
            ReactDOM.createPortal(
                ' ' + this.props.hexColor,
                colorHeading
            )
        )
    }
}

export {ColorInput, ColorHeading};