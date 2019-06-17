import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Results from './components/Results';
import Form from './components/Form';
import Game from './components/Game';

class App extends React.Component {
  state = {
    results:undefined,
    error:undefined,
    chosenChar:undefined,
    madeChoice:false,
    startedGame: false

  }
  getImg = async (e) => {
    e.preventDefault();
    const char = e.target.elements.name.value;
    const api_call = await fetch(`https://rickandmortyapi.com/api/character/?name=${char}`);
    const data = await api_call.json();
    console.log(data);
    if(char) {
      this.setState({
        results: data.results,
        chosenChar: undefined,
        madeChoice:false,
        error:undefined,
        startedGame: false,
        begin:false
        
      })
      console.log(this.state);
    }else{
      this.setState({
        results: undefined,
        chosenChar: undefined,
        madeChoice:false,
        error:"Please type  name to search",
        startedGame: false,
        begin:false
      })
    }
  }

  chooseChar = (chosen) => {
    console.log("character chosen",chosen)
    this.setState({
      results:undefined,
      chosenChar:chosen,
      madeChoice:true,
      error:undefined,
      startedGame:false,
      begin:false
    })
  }

  startGame = (props) => {

    this.setState({
      results:undefined,
      chosenChar:props.chosenChar,
      madeChoice:true,
      error:undefined,
      startedGame:true,
      begin:false
    })
    console.log("yeah bitch start game", this.state);
  }
  onwardInit = (props) => {
    this.setState({
      results:undefined,
      chosenChar:props.chosenChar,
      madeChoice:true,
      error:undefined,
      startedGame:true,
      begin:true
    })
    console.log(this.state, "onward state")
  }
  render () {
    return(
    <div className="App">
      <Titles 
      madeChoice={this.state.madeChoice}
      chosenChar={this.state.chosenChar}
      startGame={this.startGame}
      startedGame={this.state.startedGame} />
      <Form 
      getImg={this.getImg}
      madeChoice={this.state.madeChoice} />
      <Results 
      // character={this.state.character}
      // charImg={this.state.charImg}
      chooseChar={this.chooseChar}
      results={this.state.results}
      error={this.state.error}
      />
      <Game
      startedGame={this.state.startedGame}
      chosenChar={this.state.chosenChar}
      onwardInit={this.onwardInit}
      begin={this.state.begin}


      />
    </div>
    )};
}

export default App;
