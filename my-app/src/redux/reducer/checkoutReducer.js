

export const checkoutreducer = (state = [], actions) => {
    switch (actions.type) {
        case 'setProductsToCartReducer':

            console.log("setProductsToCartReducer", actions.data)
            if (actions.data == "no items to show") {
                state = []
            }
            else {
                state = actions.data
            }


            return state
        case 'addToCartReducer':
            //console.warn('reducer',actions)
            console.log("cart quantyiy", state)
            console.log("addToCartReducer", actions.data)
            let updated
            if (actions.data.repeat == "already") {
                // console.log("new product ", actions.data.product)

            //   var store =   state.push(actions.data.product)
            var store=  state.push(actions.data.product)
            console.log([...state])
        state=   [...state]
              
            }
            else { state = actions.data }
            
            return  state 

        //console.log("last reducer cart",state)


        case 'removeFromCartReducer':
            // var index= state.indexOf(actions.data.delete)
            console.log('remove from cart reducer', actions.data)
            state = actions.data
            return state

        case 'resetCart':

            state = []
            return state


        default:
            return state
    }
}
