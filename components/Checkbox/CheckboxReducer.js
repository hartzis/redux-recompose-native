import {TOGGLE_DISABLE} from './CheckboxActions'

export default function counter(state = false, action) {
  switch (action.type) {
    case TOGGLE_DISABLE:
      return !state
    default:
      return state
  }
}
