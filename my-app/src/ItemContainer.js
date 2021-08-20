
import Item from './Item'
import {addToCart,updateUser} from './redux/actions';
import { connect } from "react-redux";



const mapStateToProps=(state)=>({
           data:state.checkout
})
const mapDispatchToProps=dispatch=>({
    addtoCartHandler:data=>dispatch(addToCart(data)),

    updateData:data=>dispatch(updateUser(data))
    
  })
  
  
    
 
  
  


export default  connect(mapStateToProps,mapDispatchToProps)(Item) 