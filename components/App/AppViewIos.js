import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Checkbox from '../Checkbox/CheckboxAppIos'
import Counter from '../Counter/CounterAppIos'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
        <Checkbox />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App
