import {PropTypes} from 'react'
import store from '../../store/store'

export default function CounterViewModel(state = store.getState()) {
  const {counter, checkbox} = state
  const value = counter.get('counter', 0);
  const avatarUrl = counter.getIn(['user', 'avatar_url'], '')
  return assertCounterView({
    value,
    isUpButtonDisabled: checkbox || value > 5,
    loaded: !!avatarUrl,
    isLoading: counter.get('isLoading', false),
    avatarUrl,
  })
}

CounterViewModel.propTypes = {
  value: PropTypes.number.isRequired,
  isUpButtonDisabled: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string.isRequired,
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
