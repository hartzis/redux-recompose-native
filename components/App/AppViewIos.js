import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Counter from '../Counter/CounterApp'
import Checkbox from '../Checkbox/CheckboxApp'

function App()  {
  return (
    <View>
      <Counter />
      <Checkbox />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App
