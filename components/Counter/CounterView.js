import React, { PropTypes } from 'react'

function Counter(props) {
  const { value, onIncrement, onDecrement, incrementIfOdd, isUpButtonDisabled } = props
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
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  isUpButtonDisabled: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
}

export default Counter
