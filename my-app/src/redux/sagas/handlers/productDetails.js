import {call,put} from 'redux-saga/effects';
import {requestGetUser} from '../requests/productDetails';
import { setUser} from '../../actions/index';


export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser)
        const {data} =response
        yield put(setUser(data))
} catch(error){
    console.log(error)
}
}

export function* updateUser(action){
    try{
        const response = yield call(requestGetUser)
        const {data} =response
        yield put(setUser(data))
} catch(error){
    console.log(error)
}
}


//const response = yield call(requestGetUser)
//const {data} =response