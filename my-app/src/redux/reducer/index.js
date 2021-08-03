import {combineReducers} from 'redux';
import {changedMyMind} from './changedMyMind'
import {checkoutreducer} from './checkoutReducer'


  const reducer= combineReducers({
           checkout:checkoutreducer,
           changedMyMind: changedMyMind
})

export default (reducer)