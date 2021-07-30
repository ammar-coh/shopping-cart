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
           <ItemContainer /> 
           <ItemContainer /> 
           
        </div>
    )
}

export default Product

