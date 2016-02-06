/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  AppRegistry,
  Component,
} from 'react-native'

import App from './components/App/AppViewIos'
import { Provider } from 'react-redux'
import store from './store/store'

class reactNativeProject extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('reactNativeProject', () => reactNativeProject);
