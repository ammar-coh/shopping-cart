import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    root:{
                marginLeft:'1000px',
                marginTop:'30px',
                display:'flex'
    },

    icon: {
     color:'black',
    },
    count:{
            marginTop:'0px', 
            color:'black',
            textDecoration:'none'
    },
   
  });

function Cart() {
    const classes = useStyles()
    const counts= useSelector((state)=> state.checkout.length)
   
    return (

        <div className={classes.root}>
       
           <span ><h3 className={classes.count}>{counts}</h3></span>
           <span className={classes.icon}><AddShoppingCartIcon/></span> 
           
          <Link to='/checkout'> <h2> DONE</h2></Link>
        </div>
    )
}

export default Cart
