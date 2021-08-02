import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";


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
        marginLeft:30,
        fontSize:'10px',
    },
  });

function Checkoutproduct() {
    const classes = useStyles();
    const check= useSelector((state)=> state.checkout.cart)

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
           image={check}
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
          <Button  className= {classes.cart} size="small" >
         Remove from Cart
          </Button>
         
        </CardActions>
      </Card>
    )
}

export default Checkoutproduct
