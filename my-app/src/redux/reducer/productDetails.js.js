const initialState={
    details: undefined
};

export const productDetails =(state=initialState,actions)=>{
    switch(actions.type){
        case 'set':
          
            var check ={
                ...state, details:actions.details// check if error or problem comes
               
            }
        
            return check
        case 'update' :
            console.log('state',state)
            return state
        
       
        default:
            return state    
    }
}