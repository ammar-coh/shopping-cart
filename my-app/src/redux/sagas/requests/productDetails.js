import axios from 'axios'; 

export function requestGetUser(){
    return axios.request({
        method:'get',
        url:'http://localhost:3001/productDetails',
    })
}

export function requestUpdateUser(){
    return axios.request({
        method:'put',
        url:'http://localhost:3001/productDetails',
    })
}