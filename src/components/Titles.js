import React from 'react';
import Game from './Game';
import { Route, BrowserRouter as Router } from 'react-router-dom'

const Titles = props => (
    // console.log(props, "props bitch")
    <div>
        {
        props.madeChoice === false && 
        <div>
        <h1>Wubba Lubba Dub Dub</h1>
        <h2>Search for a character to choose your protagonist</h2>
        </div>
        }
        {
            props.madeChoice === true && props.startedGame === false &&
            // console.log("props",props)
            <div>
                <h1>You have chosen <span className="char_name">{props.chosenChar.name}</span></h1><br />
                <img src={props.chosenChar.image} alt="chosen char"></img><br />
                <h4>Gender: <span>{props.chosenChar.gender}</span></h4>
                <h4>Home: <span>{props.chosenChar.location.name}</span></h4>
                <h4>Species: <span>{props.chosenChar.species}</span></h4>
                <button onClick={() => { props.startGame(props) }}>Begin your journey</button>
            </div>
        }
        {
            
        }
        {/* {
            props.startedGame === true &&
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

                
            </div>
        }   */}
    </div>

)

export default Titles;