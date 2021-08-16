import React, {useEffect} from 'react';
import {getUser} from './redux/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from './ItemContainer';
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles({
    root: {
     display:'flex',
   
    marginLeft:0,
    },
    
  });

function Product() {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])
    const details=useSelector((state)=>state.productDetails.details);
    //const {image}= details
   console.log(details)
    return (
        <div>
        <div className={classes.root}>
           {details && details.map(i=>(
               i.id<=7 ?
               <ItemContainer image ={i.image}
               price= {i.price}/> : null
           ))}
        </div>
        <div className={classes.root}>
            {details && details.map(i=>(
                i.id >= 8  && i.id<=14 ?
                <ItemContainer image ={i.image}
                price= {i.price}/> : null
            ))}
        </div>



           
        </div>
    )
}

export default Product

