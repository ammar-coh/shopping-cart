import {call,put,delay} from 'redux-saga/effects';
import { requestPostSign_In,requestPostSign_Up,requestGetSign_In} from '../requests/user_login';
import { sign_in_reducer} from '../../actions/index';


export function* postSign_Up(action){
   //const [data]= action
  //console.log("data from login_page", action.data)
  console.log("data from sign_up_page", action.data)
  if(action.data.password.length >= 8){
     try{
        const response= yield call(requestPostSign_Up,action.data) 
         
         if (response.data.confirm == "registered"){action.data.history.push('/login_page')
      }    } catch(error){
    console.log(error)
 }}
 else {
    alert('minimum length required')
 }
 }
export function* postSign_In(action){
    //const [data]= action
   console.log("data from login_page", action.data)
      try{
             const response = yield call(requestPostSign_In,action.data);
              const {data} = response
             console.log(data)
             if (data.user_name){action.data.history.push('/')}
             else{
                alert (`${data.message}`)
             }

             localStorage.setItem('for_reducer',JSON.stringify(response.data))
            localStorage.setItem('authorization',response.data.token);
          yield put(sign_in_reducer(data))
  } catch(error){
     console.log(error)
  }
  }
  export function* getSign_In(action){
   //const [data]= action
  console.log("data get sign in", action.data)
     try{
            // const response = yield call(requestGetSign_In);
            //  const {data} = response
            // console.log(data)
            // localStorage.setItem('getSign',response.data.user_name)
           //localStorage.setItem('authorization',response.data.token);
         yield put(sign_in_reducer(action.data))
 } catch(error){
    console.log(error)
 }
 }