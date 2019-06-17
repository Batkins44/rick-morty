import React from 'react';

const Results = props => (
    <div>
    {
        props.results && props.results.map((item, index) => {
            return(
                <div key={index}>
                    { 
                    <div>
                        Character:
                        { item.name}<br/> 
                        <img src={item.image} alt={item.name}></img><br />
                        <button onClick={() => { props.chooseChar(item) }}>Choose {item.name}</button>
                        <hr />
                    </div> 
                    }
                </div>
            )

    })
    
    }{ 
        props.error && <p>{props.error}</p>
    }
    </div>

)

export default Results;