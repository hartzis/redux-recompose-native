import {INCREMENT, DECREMENT, LOADING, SET_USER} from './CounterActions'
import Immutable from 'immutable'

export default function counter(state = Immutable.Map(), action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + 1)
    case DECREMENT:
      return state.set('counter', state.get('counter') - 1)
    case LOADING:
      return state.set('loading', action.isLoading)
    case SET_USER:
      return state.set('user', Immutable.fromJS(action.user))
    default:
      return state
  }
}
