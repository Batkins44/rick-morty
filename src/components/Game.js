import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const Game = props => (
    <div>
    {
        props.startedGame === true && props.begin === false &&
            <div>
                <h4>Good Morning <span>{props.chosenChar.name}</span></h4>
                <h4>Please take these <span className="inventory_add">5 plumbuses</span> and <span className="inventory_add">50 Brapples</span>. They should help you on your journey.</h4><br />
                <img alt="plumbus" src = {require('../img/plumbus.jpg')} /> 
                <img alt="plumbus" src = {require('../img/plumbus.jpg')} /> 
                <img alt="plumbus" src = {require('../img/plumbus.jpg')} /> 
                <img alt="plumbus" src = {require('../img/plumbus.jpg')} /> 
                <img alt="plumbus" src = {require('../img/plumbus.jpg')} /> <br /> 
                <img alt="brapples" src = {require('../img/brapples.jpg')} /> <br /> 
                <h1>Good Luck</h1>
                <button onClick={() => { props.onwardInit(props) }}>Onward</button>

            </div>
    }    
    {
        props.begin === true &&
        <div>
            <h3>You are in your lab when the time police shows up and is trying to arrest you</h3>
        </div>
    } 
    </div>

)

export default Game;