import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

const style = {
  color: '#acd'
};

class App extends Component {
  state = {
    inputName: 'Siva',
    says: 'I always complete your set/reps. You are done when you are done not when you are tired!'
  }

  userInputChangeHandler = (event) => {
    this.setState({
      inputName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h2 style={style}>Udemy Assignment -1</h2>
        <UserInput
          value={this.state.inputName}
          changed={this.userInputChangeHandler}/>
        <UserOutput username={this.state.inputName}>
          {this.state.says}
        </UserOutput>
        <UserOutput username='John Cena'>
          You can't see me!
        </UserOutput>
      </div>
    );
  }
}

export default App;
