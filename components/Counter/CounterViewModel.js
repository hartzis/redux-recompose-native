import store from '../../store/store'

export default function CounterViewModel(state = store.getState()) {
  const {counter, checkbox} = state
  return {
    value: counter,
    isUpButtonDisabled: checkbox || counter > 5,
  }
}
