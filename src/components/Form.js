import React from 'react';


const Form = props => (
    <div>
        {props.madeChoice === false &&
    <form onSubmit={props.getImg}>
    <input type="text" name="name" placeholder="Character Name..."></input>
    <button>Get Character</button>

    </form>
        }
        {
            props.madeChoice === true &&
            <div></div>
            }
    </div>
);

export default Form;