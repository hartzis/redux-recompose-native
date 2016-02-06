import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App/AppView'
import store from './store/store'

const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)
