const initialstate={cart:[]}
   

export const checkoutreducer= (state=[],actions)=>{
    switch(actions.type){
        case 'addToCart' :
            console.warn('reducer',actions)
            return[
                ...state,  {cart:actions.data}
            ]
        default:
            return state
        }
    }
