import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      
   
      
    },
    
   
  });
  

function Subtotal() {
   // const classes = useStyles();
    const counts= useSelector((state)=> state.checkout)
    //console.log(counts)
    var dollar = counts.map(function(i){
                return i.cart.price
    })
    //console.log(dollar)
   
    const sum = dollar.reduce((a,b)=>a+b,0)
    //console.log(sum)
    return (
        <div>
           <h3>${sum.toFixed(2)}</h3> 
        </div>
    )
}

export default Subtotal
