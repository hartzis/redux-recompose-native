import store from '../../store/store'

export default function CheckboxViewModel(state = store.getState()) {
  const {checkbox} = state
  return {
    value: checkbox,
  }
}
