import { combineReducers } from 'redux'
import counter from '../components/Counter/CounterReducer'
import checkbox from '../components/Checkbox/CheckboxReducer'

const rootReducer = combineReducers({
  counter,
  checkbox,
})

export default rootReducer
