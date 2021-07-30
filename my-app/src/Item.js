import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useDispatch} from "react-redux";
import {addToCart, increment} from './redux/actions';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft:50,
    marginTop:100,
    width:'200px',
  },
  media: {
    width:'150px',
    height:'250px',
    marginLeft:27,
  },
  cart:{
      backgroundColor:'#FF9900',
      color:'#000000',
      marginLeft:50,
      fontSize:'10px',
  },
});



 function Item(props) {
  console.warn('props',props)
  const classes = useStyles();
  //const dispatch=useDispatch()
  //const add=useDispatch()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         image='https://readings.com.pk/Pages/Categories/BookImages/9780241314333.jpg'
          title="Contemplative Reptile"
        />
        {/*<CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>*/}
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>props.addtoCartHandler({price:100,name:'i phone 11'})} className= {classes.cart} size="small" >
        Add to Cart
        </Button>
       
      </CardActions>
    </Card>
  );
}

export default  (Item)