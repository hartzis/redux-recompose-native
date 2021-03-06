import {connect} from 'react-redux'
import View from './CheckboxView'
import {toggle} from './CheckboxActions'
import ViewModel from './CheckboxViewModel'


export default connect(ViewModel, {toggle})(View)
