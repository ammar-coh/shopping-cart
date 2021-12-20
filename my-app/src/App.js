import './App.css';
import Product from './product';
import Cart from './Cart';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import checkout from './checkout';
import Sidebar from './sideBar'
import AddProduct from './addProduct'
import Del from './Del'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, sign_in_reducer, getProductsToCartSaga, getSign_In, sign_in_saga } from './redux/actions';
import Header from './header'
import Login_page from './login_page'
import Sign_up from './sign_up'

// import { FaWindows } from 'react-icons/fa';



function App() {
  const dispatch = useDispatch();
  const counts = useSelector((state) => state.checkout)
  const uname = useSelector((state) => state.user_login.details)
  //  console.log("imported", uname?.user_name)

  useEffect(() => {
    localStorage.getItem('authorization')&& dispatch(getUser());

  }, [uname?.user_name]);
  // useEffect(() => { dispatch(getSign_In(localStorage.getItem('for_reducer')));

  // }, []);


  useEffect(() => {
    localStorage.getItem('authorization')&& dispatch(sign_in_reducer(JSON.parse(localStorage.getItem('for_reducer'))))
  }, [])
  useEffect(() => {
    localStorage.getItem('authorization')&& dispatch(getProductsToCartSaga())
  }, [uname?.user_name])

  // const update= useSelector((state) => state.productDetails.details);

  // console.log(update)

  return (
    <div >
      <Router>
        <Header />




        <Switch>
          <Route path='/login_page' exact component={Login_page} />
          <Route path='/sign_up' exact component={Sign_up} />
          <Route path='/products/add' exact component={AddProduct} />
          <Route path='/products/del' exact component={Del} />
          <Route path='/checkout' exact component={checkout} />
          <Route path='/' exact component={Product} />
          {/* <Route path='*'  component={Login_page} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App