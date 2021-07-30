import {combineReducers} from 'redux';
import {counter} from './counterReducer'
import {checkoutreducer} from './checkoutReducer'


  const reducer= combineReducers({
            cart:counter,
            checkout:checkoutreducer
})

export default (reducer)