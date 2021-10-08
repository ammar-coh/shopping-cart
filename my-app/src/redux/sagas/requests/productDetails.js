import axios from 'axios'; 

export const requestGetUser = ()=>{
    return axios.request({
        method:'get',
        url:'http://localhost:3000/api/v1/products',
    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`http://localhost:3000/api/v1/products/${data.id}`,
        params:{price: data.price}

    })
}