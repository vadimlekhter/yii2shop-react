import React from 'react';
import ReactDOM from "react-dom";

class CounterName extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         name: this.props.name,
    //     };
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.name !== nextProps.name) {
    //         return {
    //             name: nextProps.name + ' Hi'
    //         }
    //     } else return null
    // }

    render() {
        let nameStyle = {
            fontSize: 12,
            color: '#777777',
            margin: 0,
            padding: 0
        }
        return (
            <p style={nameStyle}> {this.props.name} Hi</p>
        )
    }
}

class Counter2 extends React.Component {
    render() {
        let textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return (
            <div style={textStyle}>
                {this.props.display}
            </div>
        );
    }
}

class CounterParent2 extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor: It's default time!");

        this.state = {
            count: 0,
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

    static getDerivedStateFromProps(nextProps, prevState) {
        return null;
    }

    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: Component just updated!");
        this.props.name = 'Counter'
        this.props.name = this.props.name + ' ' + this.state.count
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate: Component is about to commit its changes!")

        return null;
    }

    componentDidMount() {
        console.log("componentDidMount: Component is inserted into the tree!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: Component is about to be removed from the DOM!");
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?");
        let destination = document.querySelector("#container10")
        if (newState.count < 15) {
            console.log("shouldComponentUpdate: Component should update!");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(destination);
            console.log("shouldComponentUpdate: Component should not update!");
            return false;
        }
    }

    render() {
        let backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <CounterName name={this.props.name}/>
                <Counter2 display={this.state.count}/>
                <button onClick={this.increase}>
                    +
                </button>
            </div>
        );
    }
}

CounterParent2.defaultProps = {
    name: "Counter"
};

export {CounterName, Counter2, CounterParent2};