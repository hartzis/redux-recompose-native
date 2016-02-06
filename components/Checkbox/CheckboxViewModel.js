import {PropTypes} from 'react'
import {compose, mapStateToProps, setStateTypes} from 'compose-props'

function mapState(state, props) {
  const {checkbox} = state
  return {
    value: checkbox,
  }
}

export default compose(
  setStateTypes({
    checkbox: PropTypes.bool.isRequired,
  }),
  mapStateToProps(mapState)
)
