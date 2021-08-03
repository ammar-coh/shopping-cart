import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from './ItemContainer'
const useStyles = makeStyles({
    root: {
     display:'flex',
   
    marginLeft:70,
    },
    
  });

function Product() {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.root}>
           <ItemContainer image='https://readings.com.pk/Pages/Categories/BookImages/9780241314333.jpg' 
                          price={60}/> 
           <ItemContainer image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3463/34632582_so.jpg'
                          price={40}/> 
           <ItemContainer image='https://m.media-amazon.com/images/I/41MaZ077hyL.jpg'
                          price={24}/> 
           <ItemContainer image='https://m.media-amazon.com/images/I/51zfjwXFRrL._SY445_.jpg'
                          price={55}/> 
           <ItemContainer image='https://m.media-amazon.com/images/I/81kJ69lDGIL._SL1500_.jpg'
                          price={69}/> 
           <ItemContainer image='https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Big_Bang_Theory_Season_2.jpg/220px-The_Big_Bang_Theory_Season_2.jpg'
                          price={19}/> 
           <ItemContainer image='https://cdn.hmv.com/r/w-640/hmv/files/5f/5fcdbd5a-10df-47ea-b310-68c62c6dd017.jpg'
                          price={27}   /> 
           </div>
           <div className={classes.root}>
           <ItemContainer image='https://images-na.ssl-images-amazon.com/images/I/A1qhBebbu6L.jpg' /> 
           <ItemContainer image='https://kbimages1-a.akamaihd.net/34c5bfd3-a8d0-4500-a321-a1533c3af3f7/1200/1200/False/moby-dick-118.jpg'/> 
           <ItemContainer image='https://www.linkshop.pk/image/cache/english/sapiens-500x500.jpg'/> 
           <ItemContainer image='https://www.ynharari.com/wp-content/uploads/2017/01/homo_deus.png'/> 
           <ItemContainer image='https://static-01.daraz.pk/p/b4fc820b002f3aafe992a261cd381a83.jpg'/> 
           <ItemContainer image='https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg'/> 
           <ItemContainer image='https://www.onlinebooksoutlet.com/wp-content/uploads/2020/01/The-Clash-of-Civilizations-and-the-Remaking-of-World-Order-by-Samuel-P.-Huntington-OnlineBooksOutlet.jpeg'/> 
           </div>



           
        </div>
    )
}

export default Product

