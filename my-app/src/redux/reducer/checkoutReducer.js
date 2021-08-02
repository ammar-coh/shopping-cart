const initialstate={cart:[]}
   

export const checkoutreducer= (state=[],actions)=>{
    switch(actions.type){
        case 'addToCart' :
            //console.warn('reducer',actions)
            return[
                ...state,  {cart:actions.data}
            ]
        case 'removeFromCart':
            var index= state.indexOf(actions)
            console.log('state',actions)
            return[
            ...state.splice(index,1,0)]
        default:
            return state
        }
    }
