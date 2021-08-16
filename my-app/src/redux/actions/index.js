

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

 export const getUser=()=>{
    return{
                type:'get'
    }
}
export const setUser=(details)=>{
    return{
                type:'set',
                details:details
    }
}
 