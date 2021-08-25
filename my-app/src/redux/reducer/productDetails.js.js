const initialState={
    details: undefined,
    header:'Ammar'
};

export const productDetails =(state=initialState,actions)=>{
    switch(actions.type){
        case 'set':
          
            var check ={
                ...state,
                 details:actions.details// check if error or problem comes
               
            }
        
            return check

            case 'updateDetails':
                console.log("initialState",state)
                console.log('ratingReducer',actions.data)
                let findIndex=state.details.findIndex((item)=> item.id===actions.data.id)
                console.log(findIndex)
                let findIndexRate=state.details.findIndex((item)=> item.rating)
             console.log("RatingIndex", findIndexRate)
            
                
             

          //let newDetails=[...state.details, state.details[findIndex].price=actions.data.price ]
            //let updateRatings =[...state.details,state.details[findIndexRate].rating=actions.data.rate]
            //console.log([updateRatings],'updated')
           
        // console.log("details new", newDetails)
        return {
            ...state,  
            details: actions.data.id == undefined? [...state.details,state.details[findIndexRate].rating=actions.data.rate]:[...state.details, state.details[findIndex].price=actions.data.price ]
            }
            

    case 'deleteDetails':
        //console.log(state)
      //  console.log('check', actions.data)
        var index= state.details.findIndex(i=>i.id===actions.data.id) 
        //console.log(index)
        var final = state.details.splice(index,1)
        //console.log(final)
        //console.log(state,'state')
        var newState=state.details
       // console.log('newSatet',newState)
        
        return {details:[...state.details],
        header:'delete'}
    case 'addDetails':
      console.log('initial state', state.details)
      var item=actions.data
        //console.log('item', item)
      var total = state.details.length +1
     console.log('total',total)
      item.id= total  
      console.log('newItem',item)
      var det= state.details
     console.log('det',det)
      var newItemsAdded = [...det, item]
     console.log('final', newItemsAdded)
        return {...state, details:newItemsAdded, 
                header:'added'}
       
        default:
            return state    
    }
}