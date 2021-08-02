import Checkoutproduct from './checkoutProduct'
import {removeFromCart} from './redux/actions';
import { useDispatch,connect } from "react-redux";




const mapStateToProps=(state)=>({
           cart:state.checkout
})
const mapDispatchToProps=dispatch=>({
    removefromCartHandler:data=>dispatch(removeFromCart(data))
    
  })

  export default  connect(mapStateToProps,mapDispatchToProps)(Checkoutproduct) 
  