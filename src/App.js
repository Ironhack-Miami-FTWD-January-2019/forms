import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMovie from './AddMovie'

class App extends Component {
  
  render() {
    return (
      <div className="App">

          <AddMovie />

      </div>
    );
  }
}

export default App;
