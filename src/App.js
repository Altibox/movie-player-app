import React, { Component } from 'react'
import { connect } from 'react-redux'
import Player from '@altibox/demo-altibox-player'
import Controls from '@altibox/videocontrol'
import MovieList from '@altibox/movie-list'
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
              <Player
                playing={this.props.playing}
                url={Object.values(this.props.movies)[this.props.selectedMovieIndex]}
              />
            </div>
            <div style={styles.controller}>
              <Controls 
                isPlaying={this.props.playing}
                onEvent={this.onControlEvent.bind(this)} />
            </div>
          </div>
          <div style={styles.listContainer}>
            <MovieList 
              movies={this.props.movies} 
              selected={this.props.selectedMovieIndex}
              onMoviesFetched={this.setMovies.bind(this)}
              onMovieClick={this.selectMovie.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
  setMovies(movies) {
    this.props.dispatch({
      type: 'SET_MOVIES',
      movies: movies
    })
  }
  selectMovie(uri) {
    this.props.dispatch({
      type: 'SELECT_MOVIE',
      uri: uri
    })
  }
  onControlEvent(event) {
    this.props.dispatch({
      type: 'TOGGLEPLAY',
    })
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

export default connect(state => {
  return state
})(App)
