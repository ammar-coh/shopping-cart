import './App.css';
import Product from './product';
import Cart from './Cart';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import checkout from './checkout';
import Sidebar from './sideBar'
import AddProduct from './addProduct'
import Del from './Del'
import { useDispatch,  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/actions';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  
  // const update= useSelector((state) => state.productDetails.details);

  // console.log(update)
  
  return (
    <div >
       <Router>
    
      <Sidebar/>
      <Cart/>
     
      
      <Switch>
      <Route path='/' exact component={Product}/>
     <Route path='/products/add' exact component={AddProduct}/>
     <Route path='/products/del' exact component={Del}/>
      <Route path='/checkout' exact component={checkout}/>

     </Switch>
     </Router>
    </div>
  );
}

export default App;
