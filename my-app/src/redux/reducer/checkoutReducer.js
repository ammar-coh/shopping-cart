const initialstate={cart:[]}
   

export const checkoutreducer= (state=[],actions)=>{
    switch(actions.type){
        case 'addToCart' :
            //console.warn('reducer',actions)
            return[
                ...state,  {cart:actions.data}
            ]
        case 'removeFromCart':
           // var index= state.indexOf(actions.data.delete)
            console.log('state',state)
           var index = state.findIndex(function(i){
                    return i.cart.image === actions.data.delete
           }) 
           //console.log('index',index)
            var final = state.splice(index,1)
           
           var state= state 
         //  console.log(state)
            return[
                ...state]
            
        default:
            return state
        }
    }
