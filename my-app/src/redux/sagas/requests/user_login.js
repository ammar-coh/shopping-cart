import axios from 'axios'; 

export function requestPostSign_Up(data){
    console.log("see off",data.user_name)
    return axios.request({
        method:'post',
        url:`http://localhost:3000/users`,
       params:{email: data.email, 
            password: data.password,
        user_name: data.user_name}
        // console.log(data.user_name)

    })
}

export function requestPostSign_In(data){
    return axios.request({
        method:'post',
        url:`http://localhost:3000/users/sign_in`,
       params:{email: data.email, 
            password: data.password}

    })
}
export function requestGetSign_In(data){
    return axios.request({
        method:'get',
        url:`http://localhost:3000/users/sign_in`,
      

    })
}