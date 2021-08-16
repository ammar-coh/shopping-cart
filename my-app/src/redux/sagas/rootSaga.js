import {takeLatest} from 'redux-saga/effects';
import {handleGetUser} from './handlers/productDetails';
import {getUser} from '../actions/index';

export function* watcherSaga(){
    yield takeLatest(getUser,handleGetUser)
}