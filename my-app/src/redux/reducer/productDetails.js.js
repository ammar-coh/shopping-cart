const initialState={
    details: undefined
};

export const productDetails =(state=initialState,actions)=>{
    switch(actions.type){
        case 'set':
           
            return {
                ...state, details:actions.details// check if error or problem comes
            }
        default:
            return state    
    }
}