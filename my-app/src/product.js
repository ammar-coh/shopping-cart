import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from './ItemContainer'
const useStyles = makeStyles({
    root: {
     display:'flex',
    flexDirection:'row',
    marginLeft:70,
    },
    
  });

function Product() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <ItemContainer image='https://readings.com.pk/Pages/Categories/BookImages/9780241314333.jpg' /> 
           <ItemContainer image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3463/34632582_so.jpg'/> 
           
        </div>
    )
}

export default Product

