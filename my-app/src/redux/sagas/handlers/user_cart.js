import {call,put,delay} from 'redux-saga/effects';
import { requestAddProductsToCart,requestGetProductsToCart,requestDeleteProductsFromCart,} from '../requests/user_cart';

import { addToCartReducer,setProductsToCartReducer,removeFromCartReducer} from '../../actions/index';
import { useSelector, useDispatch } from "react-redux";

export function* getProductsToCartSaga(action){
  //const [data]= action
 console.log("data from itemsAddtoCart action", action.data)
    try{
           const response = yield call(requestGetProductsToCart);
            const {data} = response
            console.log("get cart products", data)
          // localStorage.setItem('cart',response.data)
        yield put(setProductsToCartReducer(data))
} catch(error){
  console.log(error)
}
}

export function* addProductsToCart(action){
    //const [data]= action
   console.log("data from itemsAddtoCart action", action.data)
  //  const check = useSelector((state)=>checkout.state)
      try{

             const response = yield call(requestAddProductsToCart,action.data);
              const {data} = response
              console.log("shop", data.current_user)
              console.log("reapeat", data.repeat)
           if (data.repeat =="already"){
            
             yield put(addToCartReducer(data))
           }else{
            localStorage.setItem('cart',response.data.current_user)
            yield put(addToCartReducer(data.current_user))
           }
            
  } catch(error){
    console.log(error)
  }
  }

  export function* deleteProductsFromCart(action){
    //const [data]= action
   console.log("data from items_deletedfrom_Cart action", action.data)
      try{
            const response = yield call(requestDeleteProductsFromCart,action.data);
             const {data} = response
               console.log("destroy backend", data)
            localStorage.setItem('cart_delete',response.data)
          yield put(removeFromCartReducer(data))
  } catch(error){
    console.log(error)
  }
  }