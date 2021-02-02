import React from 'react';

class Letter extends React.Component {
    render() {
        let letterStyle = {
            padding: 10,
            margin: 10,
            // backgroundColor: '#FFDE00',
            backgroundColor: this.props.bgColor,
            color: '#333',
            display: 'inline-block',
            fontFamily: 'monospace',
            fontSize: 32,
            textAlign: 'center'
        }
        return (
            <div style={letterStyle}>
                {this.props.children}
            </div>
        )
    }
}


export default Letter;