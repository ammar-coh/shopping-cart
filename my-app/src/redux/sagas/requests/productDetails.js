import axios from 'axios'; 

export function requestGetUser(){
    return axios.request({
        method:'get',
        url:'http://localhost:3000/api/v1/products',
    })
}

