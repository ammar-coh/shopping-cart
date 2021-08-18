

export const increment =() =>{
    return {
        type: 'increment', 
        
    };
}
export const addToCart =(data)=>{
  // console.warn('actions',data)
    return {
                type:'addToCart',
                data:data
               
    }
}

export const removeFromCart =(data)=>{
    //console.warn('actions',data)
     return {
                 type:'removeFromCart',
                 data:data
                 
                
     }
 }

 export const getUser=(data)=>{
    return{
                type:'get',
                data:data
    }
}
export const setUser=(details)=>{
    return{
                type:'set',
                details:details
    }
}

export const updateUser=(data)=>{
    return {
        type:'update',
            data:data
    }
}
 