import React, { Component } from 'react'
import Player from '@altibox/demo-altibox-player'
import Controls from '@altibox/videocontrol'
import MovieList from '@altibox/movie-list'
import './App.css';

class App extends Component {
  state = {
    movies: {
      'muvi': 'http://techslides.com/demos/sample-videos/small.mp4',
      'muvi2': 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
    },
    selectedMovieIndex: 0,
    playing: false
  }
  render() {
    return (
      <div className="App">
        <div style={styles.header}>
          <h2>Altibox Muvi Player</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.playerContainer}>
            <div style={styles.player}>
              <Player
                playing={this.state.playing}
                url={Object.values(this.state.movies)[this.state.selectedMovieIndex]}
              />
            </div>
            <div style={styles.controller}>
              <Controls 
                isPlaying={this.state.playing}
                onEvent={this.onControlEvent.bind(this)} />
            </div>
          </div>
          <div style={styles.listContainer}>
            <MovieList 
              movies={this.state.movies} 
              selected={this.state.selectedMovieIndex}
              onMovieClick={this.selectMovie.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
  selectMovie(uri) {
    var index = Object.values(this.state.movies).indexOf(uri)
    this.setState({ selectedMovieIndex: index })
  }
  onControlEvent(event) {
    this.setState({ playing: !this.state.playing })
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
