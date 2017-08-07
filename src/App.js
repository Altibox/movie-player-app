import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.header}>
          <h2>Altibox Muvi Player</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.playerContainer}>
            <div style={styles.player}>
              player here
            </div>
            <div style={styles.controller}>
              controller here
            </div>
          </div>
          <div style={styles.listContainer}>
            list
          </div>
        </div>
      </div>
    );
  }
}

let styles = {
  header: {
    display: 'flex',
    height: 60,
    border: '1px solid red'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid green'
  },
  playerContainer: {
    display: 'flex',
    flex: 1,
    border: '1px solid red',
    flexDirection: 'column'
  },
  listContainer: {
    display: 'flex',
    width: '30%'
  }
}

export default App;
