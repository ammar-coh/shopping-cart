import axios from 'axios'; 

export const requestGetProduct = ()=>{
    return axios.request({
        method:'get',
        url:'http://localhost:3000/api/v1/products',
    })
}

export function requestUpdateProduct(data){
    return axios.request({
        method:'put',
        url:`http://localhost:3000/api/v1/products/${data.id}`,
        params:{price: data.price,
        ratings: data.ratings}

    })
}


export function requestCreateProduct(data){
    return axios.request({
        method:'post',
        url:`http://localhost:3000/api/v1/products`,
        params:{image: data.image, 
            price: data.price}

    })
}

export function requestDestroyProduct(data){
    return axios.request({
        method:'delete',
        url:`http://localhost:3000/api/v1/products/${data.id}`,
        //headers: {"Access-Control-Allow-Origin": "*"}
        
       

    })
}
