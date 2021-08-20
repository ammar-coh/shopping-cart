import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useDispatch} from "react-redux";
import {addToCart, increment} from './redux/actions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft:50,
    marginTop:100,
    width:'350px',
  },
  media: {
    width:'90px',
    height:'150px',
    marginLeft:27,
  },
  cart:{
      backgroundColor:'#FF9900',
      color:'#000000',
      marginLeft:22,
      fontSize:'10px',
  },
  price:{
    marginLeft:13,
    fontSize:'15px',
  },
  input:{
    width:'50px'
  }
});



 function Item(props) {
  
  const classes = useStyles();
  //const dispatch = useDispatch();
  const [price,setPrice] = useState('')
 

//console.log ('data',data)
const getPrice=(event)=>{
   setPrice(event.target.value)
}
  //console.warn('props',props)
  
  //const dispatch=useDispatch()
  //const add=useDispatch()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography  className={classes.price} gutterBottom variant="h7" component="h2">
           Price $ {props.price}
          </Typography>
         {/**  <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>props.addtoCartHandler({image:props.image,
        price:props.price})} className= {classes.cart} size="small" >
        Add to Cart
        </Button>
     
           <input className={classes.input} type = 'number' onChange={getPrice}/> 
          
           <button onClick={()=>props.updateData({id:props.id,
        price:price})}>click here</button>
       
       
      </CardActions>
    </Card>
  );
}

export default  (Item)