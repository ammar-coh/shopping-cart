import { connect } from "react-redux";
import {updateUser} from './redux/actions/index';
import Entry from './newEntrry'

const mapStateToProps=(state)=>({
  
})
const mapDispatchToProps=dispatch=>({
updateData:data=>dispatch(updateUser(data))

})

export default  connect(mapStateToProps,mapDispatchToProps)(Entry) 
