import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import createStore from './store'

let store = createStore()

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>
  , document.getElementById('root'))
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  })
}

// Bootstrapp app
// ajax.loadShit((movies) => {
//   store.dispath({ type: 'SET_MOVIES', movies: movies })
//})
