import React from 'react';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';

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
           <Item image='https://readings.com.pk/Pages/Categories/BookImages/9780241314333.jpg'/> 
           <Item image='https://i.ebayimg.com/images/g/DcwAAMXQnYJQ9arx/s-l500.jpg'/> 
           <Item image='https://m.media-amazon.com/images/I/41MaZ077hyL.jpg'/> 
        </div>
    )
}

export default Product

