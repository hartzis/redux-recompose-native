import {PropTypes} from 'react'
import store from '../../store/store'

export default function CounterViewModel(state = store.getState()) {
  const {counter, checkbox} = state
  return assertCounterView({
    value: counter,
    isUpButtonDisabled: checkbox || counter > 5,
  })
}

CounterViewModel.propTypes = {
  value: PropTypes.bool.isRequired,
  isUpButtonDisabled: PropTypes.bool.isRequired,
}

function assertCounterView(state) {
  // if on dev
  if (true) {
    Object.keys(CounterViewModel.propTypes).forEach((key) => {
      try {
        const error = CounterViewModel.propTypes[key](state, key, 'CounterViewModel');
        if (error) {
          throw error;
        }
      } catch (e) {
        console.error(e)
      }
    })
  }
  return state
}
