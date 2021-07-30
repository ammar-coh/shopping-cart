

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