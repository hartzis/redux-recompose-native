import React, { PropTypes } from 'react'

function Checkbox({value, toggle})  {
  return (
    <p>
      Disable the increment:
      <input type="checkbox" onClick={toggle} value={value} />
    </p>
  )
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default Checkbox
