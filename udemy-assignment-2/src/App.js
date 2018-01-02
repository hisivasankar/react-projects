import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    text: "Something"
  }
  userInputHandler = (event) => {
    this.setState({
      text: event.target.value || ""
    });
  }

  charDeleteHandler = (index) => {
    let oldText = this.state.text;
    let newText = oldText.substr(0, index) + oldText.substr(index + 1, oldText.length);
    this.setState({
      text: newText
    });
  }

  renderCharComponent = (sText) => {
    let chars = sText.split(""),
        charComponent = chars.map((char, index) => {
          let key = char + index;
          return <CharComponent
                    key={index} letter={char}
                    onClick={this.charDeleteHandler.bind(this, index)}/>;
        });
    return charComponent;
  }

  render() {
    return (
      <div className="App">
        <input 
          className="input"
          value={this.state.text}
          onChange={this.userInputHandler}/>
        <ValidationComponent length={this.state.text.length}/>
        <div>
          {this.renderCharComponent(this.state.text)}
        </div>
      </div>
    );
  }
}

export default App;
