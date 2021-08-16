import React from 'react';
import CheckoutContainer from './CheckoutContainer';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Subtotal from './Subtotal';
import Changecontainer from './Changecontainer'

const useStyles = makeStyles({
  main:{
        
        display:'flex'
  },
  root: {
    
    marginLeft:'-150px',
 
    marginTop:100,
    width:'400px',
   

   
    
  },
  total:{
    marginLeft:100,
    
    width:'400px',
    
    
    
  },

  mind:{
   
    width:'400px',
    marginLeft:'850px',
   
  },
  head:{
    marginLeft:60
  }
 
});






function Checkout() {
  const classes = useStyles();
  const counts= useSelector((state)=> state.checkout)
  console.warn(counts)
  
    
    return (
      <div className={classes.main}>

<div className={classes.total} >
         <h2>Total</h2>
         <Subtotal/>
       </div>
       <div className={classes.root}>
         <h3 className={classes.head}>Cart</h3>
         { counts.map(i=>(
         <CheckoutContainer image={i.cart.image}
                            price={i.cart.price}/>)
        
         )
        }
       </div>
     
       <div className={classes.mind}>
                      <h3 className={classes.head}>Not purchasing</h3>                      
                      <Changecontainer/>
       </div>
      
       
     
       
       </div>
    )
}

export default Checkout
