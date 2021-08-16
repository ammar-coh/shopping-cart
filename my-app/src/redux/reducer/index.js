import {combineReducers} from 'redux';
import {changedMyMind} from './changedMyMind';
import {checkoutreducer} from './checkoutReducer';
import {productDetails} from './productDetails.js'


  const reducer= combineReducers({
           checkout:checkoutreducer,
           changedMyMind: changedMyMind,
           productDetails:productDetails,
})

export default (reducer)