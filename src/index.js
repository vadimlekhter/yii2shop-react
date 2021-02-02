import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from "./HelloWorld";
import Buttonify from "./Buttonify";
import Letter from "./Letters";
import {Card, LabelHex, Label, LabelText, Square} from "./Cards";
import {LightningCounterDisplay, LightningCounter} from "./LightingCounter"
import {Time, City, Circle} from "./Cities"
import {Button, Counter, CounterParent} from "./CounterFirst"
import {CounterName, Counter2, CounterParent2} from "./CounterSecond"
import {ColorInput, ColorHeading} from "./ColorInput"
import reportWebVitals from './reportWebVitals';
// import {render} from "@testing-library/react";

//---------------------------------------------------------------------

ReactDOM.render(
    <div>
        <HelloWorld name='Vasya' surname='Ivanov'/>
        <HelloWorld name='Petya' surname='Petrov'/>
        <HelloWorld name='Masha' surname='Sidorova'/>
    </div>,
    document.getElementById('container')
)

//---------------------------------------------------------------------

ReactDOM.render(
    <div>
        <Buttonify behavior='submit'>
            Отправить данные
        </Buttonify>
    </div>,
    document.getElementById('container2')
)

//---------------------------------------------------------------------

ReactDOM.render(
    <div>
        <Letter bgColor='red'>
            А
        </Letter>
        <Letter bgColor='green'>
            Е
        </Letter>
        <Letter bgColor='yellow'>
            И
        </Letter>
        <Letter bgColor='blue'>
            О
        </Letter>
        <Letter bgColor='brown'>
            У
        </Letter>
    </div>,
    document.getElementById('container3')
)

//---------------------------------------------------------------------

ReactDOM.render(
    <Card colorHex='#FF6663' colorText='Pink' href='https://yandex.ru' window='blanc'/>,
    document.getElementById('container4')
)

ReactDOM.render(
    <Card colorHex='#FFA737' colorText='Yellow' href='https://yandex.ru' window='blanc'/>,
    document.getElementById('container5')
)

let card = <Card colorHex='#FF6663' colorText='Pink' href='https://yandex.ru' window='blanc'/>

ReactDOM.render(
    <div>
        {card},
    </div>,
    document.getElementById('container6')
)

//---------------------------------------------------------------------

ReactDOM.render(
    <LightningCounterDisplay/>,
    document.querySelector("#container7")
);

//---------------------------------------------------------------------

let cities = ['Moscow', 'London', 'New York', 'Tokyo'];
let circles = []
cities.forEach((item, index) => circles.push(<Circle city={cities[index]}/>))
ReactDOM.render(
    <div>
        {circles}
    </div>,
    document.querySelector("#container8")
)

//---------------------------------------------------------------------

ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    document.querySelector("#container9")
);

//---------------------------------------------------------------------

let destination = document.querySelector("#container10")

ReactDOM.render(
    <div>
        <CounterParent2/>
    </div>,
    destination
);

//---------------------------------------------------------------------

ReactDOM.render(
    <div>
        <ColorInput/>
    </div>,
    document.querySelector("#container11")
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
