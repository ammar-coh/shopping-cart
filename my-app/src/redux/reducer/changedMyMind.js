

const initialState={
    removedItem:[]
}

export const changedMyMind= (state=[],actions)=> {
            switch(actions.type){
                case 'removeFromCart': 
              //  console.log(actions.data)
                
           //console.log('index',index)
           
           
          
         //  console.log(state)
            return[
                ...state,{removedItem:actions.data}]
            case 'addToCart' :
                console.log(state)
                var index = state.findIndex((i)=>{
                    return 
                })
            
        default:
            return state
            }
}