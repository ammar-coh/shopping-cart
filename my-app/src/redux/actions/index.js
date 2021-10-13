

export const increment =() =>{
    return {
        type: 'increment', 
        
    };
}
export const addToCart =(data)=>{
  console.warn('actions',data)
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
    console.log(data,'upppp')
    return {
        type:'update',
            data:data
    }
}


export const updateUserDetails=(data)=>{
    return {
        type:'updateDetails',
            data:data
    }
}
export const deleteDispatch =(data)=>{
    return {
        type:'delete',
        data:data
    }
}

export const deleteDetails =(data)=>{
    return {
        type:'deleteDetails',
        data:data
    }
}

export const addToSaga =(data)=>{
    console.log(data, "saga")
    return {
        type:'add',
        data:data
    }
}
export const addToReducer =(data)=>{
    return {
        type:'addDetails',
        data:data
    }
}