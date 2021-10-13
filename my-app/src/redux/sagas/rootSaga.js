import {takeLatest,all} from 'redux-saga/effects';
import {handleGetUser,updateInfo,deleteInfo,addItemInfo} from './handlers/productDetails';
// import {getUser,updateUser} from '../actions/index';
//import {updateUser} from '../actions/index'

 function* watcherSaga(){
  //  yield takeLatest(updateUser,handleGetUser)
    yield takeLatest('get',handleGetUser)
     yield takeLatest('update',updateInfo)
    yield takeLatest('delete',deleteInfo)
    yield takeLatest('add',addItemInfo)
}
export  function* rootSaga() {
  yield all([
    watcherSaga(),
  ])
  // code after all-effect
}