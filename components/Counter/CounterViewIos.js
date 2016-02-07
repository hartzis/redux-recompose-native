import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native'
import { PropTypes } from 'react'

class Counter extends Component {
  render() {
    const { value, onIncrement, onDecrement, incrementIfOdd, isUpButtonDisabled, loaded, isLoading, startLoading, avatarUrl } = this.props
    return (
      <View style={styles.container}>
        <Text>Clicked: {value} times</Text>
        <TouchableHighlight onPress={isUpButtonDisabled ? null : onIncrement}>
          <Text>+</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onDecrement}>
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={incrementIfOdd}>
          <Text>Increment if odd</Text>
        </TouchableHighlight>
        <TouchableHighlight disabled={isLoading} onPress={startLoading}>
          <Text>{isLoading ? 'Loading...' : 'Load!'}</Text>
        </TouchableHighlight>
        <Text>{loaded ? 'Finished Loading' : 'Not Loaded'}</Text>
        {loaded ? <Image style={{width: 60, height: 60}}source={{uri: avatarUrl}}/> : null}
      </View>
    )
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
  },
});

export default Counter
