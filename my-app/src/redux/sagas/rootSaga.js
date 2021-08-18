import {takeLatest,all} from 'redux-saga/effects';
import {handleGetUser,updateInfo} from './handlers/productDetails';
import {getUser,updateUser} from '../actions/index';
//import {updateUser} from '../actions/index'

 function* watcherSaga(){
  //  yield takeLatest(updateUser,handleGetUser)
    yield takeLatest(getUser,handleGetUser)
}

 function* updateSaga(){
  //  yield takeLatest(updateUser,handleGetUser)
    yield takeLatest(updateUser,updateInfo)
}

export  function* rootSaga() {
  yield all([
    watcherSaga(),
    updateSaga()
  ])
  // code after all-effect
}