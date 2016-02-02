import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Counter from './components/Counter/CounterApp'
import Checkbox from './components/Checkbox/CheckboxApp'
import store from './store/store'

const rootEl = document.getElementById('root')

console.log(store.getState())

render(
  <Provider store={store}><div><Counter /><Checkbox /></div></Provider>,
  rootEl
)
