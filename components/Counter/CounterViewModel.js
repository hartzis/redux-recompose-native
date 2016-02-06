import {PropTypes} from 'react'
import {compose, mapStateToProps, setStateTypes} from 'compose-props'

function mapState(state, props) {
  const {counter, checkbox} = state
  const value = counter.get('counter', 0);
  const avatarUrl = counter.getIn(['user', 'avatar_url'], '')
  return {
    value,
    isUpButtonDisabled: checkbox || value > 5,
    loaded: !!avatarUrl,
    isLoading: counter.get('isLoading', false),
    avatarUrl,
  }
}

export default compose(
  setStateTypes({
    counter: PropTypes.object.isRequired,
    checkbox: PropTypes.bool.isRequired,
  }),
  mapStateToProps(mapState)
)
