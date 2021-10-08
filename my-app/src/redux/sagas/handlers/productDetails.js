import {call,put,delay} from 'redux-saga/effects';
import {requestGetUser,requestUpdateProduct } from '../requests/productDetails';
import { getUser, setUser, updateUserDetails,deleteDetails,addToReducer} from '../../actions/index';
import { ContactlessOutlined } from '@material-ui/icons';



export function* handleGetUser(){
  //const [data]= action
 
    try{
           const response = yield call(requestGetUser);
            const {data} = response
       
       
        yield put(setUser(data))
} catch(error){
    console.log(error)
}
}

//console.log(handleGetUser)


export function* updateInfo(action){

  try {
     const response = yield call(requestUpdateProduct,action.data);
  // console.log('UPDATESaga', action.data)
  console.log(response.data.data,'response')

       yield put(updateUserDetails(response.data.data))
  
} catch (error) {
  console.error('this is error',error)
}
}

// export function* deleteInfo(action){

//   //console.log('action', action.data)
//   try {
   
//     yield put(deleteDetails(action.data))
// } catch (error) {
  
// }
// }

// export function* addItemInfo(action){

//   //console.log('year',action.data)
//   try {
   
//     yield put(addToReducer(action.data))
// } catch (error) {
  
// }
// }
