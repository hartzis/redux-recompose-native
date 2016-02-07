import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Switch,
  View
} from 'react-native'
import { PropTypes } from 'react'

class Checkbox extends Component {
  render() {
    const {toggle, value} = this.props;
    return (
      <View style={styles.container}>
        <Text>Disable the increment:</Text>
        <Switch onValueChange={toggle} value={value} />
      </View>
    )
  }
}

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
});

export default Checkbox
