import React from 'react';

const Titles = props => (
    <div>
        {
        props.madeChoice == false && 
        <div>
        <h1>Wubba Lubba Dub Dub</h1>
        <h2>Search for a character to choose your protagonist</h2>
        </div>
        }
        {
            props.madeChoice == true &&
            <div>
                <h1>You have chosen <span className="char_name">{props.chosenChar.name}</span></h1><br />
                <img src={props.chosenChar.image} alt="chosen char"></img><br />
                <h4>Gender: <span>{props.chosenChar.gender}</span></h4>
                <h4>Home: <span>{props.chosenChar.location.name}</span></h4>
                <h4>Species: <span>{props.chosenChar.species}</span></h4>
                <button>Begin your journey</button>
            </div>
        }
    </div>

)

export default Titles;