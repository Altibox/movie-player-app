import { createStore } from 'redux'

let initialState = {
  movies: {
    'muvi': 'http://techslides.com/demos/sample-videos/small.mp4',
    'muvi2': 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'
  },
  selectedMovieIndex: 0,
  playing: false
}

function reducers(state=initialState, action) {
  switch(action.type) {
    case 'SELECT_MOVIE':
      return {
        ...state,
        selectedMovieIndex: Object.values(state.movies).indexOf(action.uri)
      }
    case 'TOGGLEPLAY':
      return {
        ...state,
        playing: !state.playing
      }
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.movies
      }
    default:
      return state
  }
}

export default function() {
  return createStore(reducers)
}
