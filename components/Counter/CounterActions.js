export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment() {
  return {type: INCREMENT}
}

export function decrement() {
  return {type: DECREMENT}
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState()
    if (counter % 2 === 1) {
      dispatch(increment())
    }
  }
}
