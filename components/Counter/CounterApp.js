import {connect} from 'react-redux'
import View from './CounterView';
import {increment, decrement} from './CounterActions'
import ViewModel from './CounterViewModel'


export default connect(ViewModel, {onIncrement: increment, onDecrement: decrement})(View)
