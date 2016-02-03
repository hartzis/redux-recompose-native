import React, { PropTypes } from 'react'

function Counter(props) {
  const { value, onIncrement, onDecrement, incrementIfOdd, isUpButtonDisabled, loaded, isLoading, startLoading, avatarUrl } = props
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button disabled={isUpButtonDisabled} onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
      {' '}
      <button onClick={incrementIfOdd}>
        Increment if odd
      </button>
      {' '}
      <button disabled={isLoading} onClick={startLoading}>
        {isLoading ? 'Loading...' : 'Load!'}
      </button>
      {loaded ? 'Finished Loading' : 'Not Loaded'}
      {loaded ? <img src={avatarUrl}/> : null}
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  isUpButtonDisabled: PropTypes.bool.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.string,
}

export default Counter
