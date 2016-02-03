export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const LOADING = 'LOADING'
export const SET_USER = 'SET_USER'

export function increment() {
  return {type: INCREMENT}
}

export function decrement() {
  return {type: DECREMENT}
}

export function loading(isLoading) {
  return {type: LOADING, isLoading}
}

export function setUser(user) {
  return {type: SET_USER, user}
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState()
    if (counter % 2 === 1) {
      dispatch(increment())
    }
  }
}

export function startLoading() {
  return (dispatch) => {
    dispatch(loading(true))
    fetch("https://api.github.com/users/hartzis")
      .then((d)=>d.json())
      .then((user)=>{
        dispatch(loading(false))
        dispatch(setUser(user))
      })
  }
}
