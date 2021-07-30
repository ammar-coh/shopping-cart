import {combineReducers} from 'redux';
import {counter} from './counterReducer'


  const reducer= combineReducers({
            cart:counter
})

export default (reducer)