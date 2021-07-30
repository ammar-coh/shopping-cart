import './App.css';
import Product from './product';
import Cart from './Cart';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import checkout from './checkout';


function App() {
  return (
    <div >
       <Router>
      <Cart/>
      
      <Switch>
      <Route path='/' exact component={Product}/>
      <Route path='/checkout' exact component={checkout}/>

     </Switch>
     </Router>
    </div>
  );
}

export default App;
