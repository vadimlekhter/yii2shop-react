import React from 'react';

    class HelloWorld extends React.Component {
        render() {
            return (
                <div>
                    <span>Hi, {this.props.name} </span>
                    <span>{this.props.surname}</span>
                </div>
            )
        }
    }

export default HelloWorld;