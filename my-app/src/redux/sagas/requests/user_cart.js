import axios from 'axios'; 

export function requestGetProductsToCart(data){
  return axios.request({
      method:'get',
      url:`http://localhost:3000/api/v1/shops`,
      headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

  })
}

export function requestAddProductsToCart(data){
    return axios.request({
        method:'post',
        url:`http://localhost:3000/api/v1/shops`,
       params:{image: data.image, 
            price: data.price,
              product_id: data.product_id  },
            headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

    })
}

export function requestDeleteProductsFromCart(data){
  return axios.request({
      method:'delete',
      url:`http://localhost:3000/api/v1/shops/${data.product_id}`,
     
          headers:{Authorization: `Bearer ${localStorage.getItem('authorization')}`}

  })
}