import {connect} from 'react-redux'
import View from './CounterViewIos';
import {increment, decrement, incrementIfOdd, startLoading} from './CounterActions'
import ViewModel from './CounterViewModel'


export default connect(ViewModel, {
  incrementIfOdd,
  onIncrement: increment,
  onDecrement: decrement,
  startLoading,
})(View)
