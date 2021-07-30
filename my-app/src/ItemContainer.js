
import Item from './Item'
import {addToCart} from './redux/actions';
import { useDispatch,connect } from "react-redux";



const mapStateToProps=(state)=>({
           cart:state.checkout
})
const mapDispatchToProps=dispatch=>({
    addtoCartHandler:data=>dispatch(addToCart(data))
    
  })
  
  
    
 
  
  


export default  connect(mapStateToProps,mapDispatchToProps)(Item) 