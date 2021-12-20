import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { addToCartSaga, updateUser, deleteDispatch } from "./redux/actions";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { GrUpdate } from "react-icons/gr";

const useStyles = makeStyles({
  root: {
  marginLeft:'0px',
    marginTop: 90,
width:'200px',
    height: "320px",
   
    boxSizing: 'border-box',
  },
  media: {
    width: "90px",
    height: "150px",
    marginLeft: 27,
  },
  update:{
    fontSize:"10px",
  marginLeft:"124px",
  marginTop:"-32px",
    color: "#FF9900",
    width:"26px",
  
  }, 
  cart: {
   backgroundColor: "#FF9900",
    color: "#000000",
    marginLeft: 42,
    fontSize: "10px",
  

  },
  price: {
    marginLeft: 15,
    fontSize: "15px",
  },
  input: {
    width: "70px",
    marginTop: 5,
    marginLeft: 52,
   
    fontSize:"10px"
    
  },
  del:{
   

    hover: {
      "&:hover": {
        cursor: 'pointer'
      }
  }
}
 
});
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Item(props) {
  const user = useSelector((state)=> state.user_login.details)
  const ratings = Array(5).fill(0);
  const [currentRating, setRating] = useState(0);
  const [currentHoverValue, setHoverValue] = useState(undefined);
  const [rats, setRats] = useState(props.rating);
  //console.log(rats)
  const handleRats = (value) => {
    setRats(value);
  };
  // console.log(rats)

  const handleClickRat = (value) => {
    setRating(value);
  };
  const handleHover = (v) => {
    setHoverValue(v);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const classes = useStyles();
  //const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  const dispatchTwo = useDispatch();
  //  const details=useSelector((state)=>state.productDetails.details);

  //console.log ('data',data)
  const getPrice = (event) => {
    setPrice(event.target.value);
  };
  //console.warn('props',props)

  //const dispatch=useDispatch()
  //const add=useDispatch()
  var a = parseInt(price);
  //console.log('number',a)

  return (
  
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2">
            {props.year}
          </Typography>

          <div>
            {props.rating >= 1
              ? ratings.map((_, index) => {
               //   console.log("index", index);
                  return (
                    <FaStar
                      key={index}
                      style={{ cursor: "cursor", marginRight: 10 }}
                      color={props.rating > index ? colors.orange : colors.grey}
                      onClick={
                        () => dispatchTwo(updateUser({ ratings: index + 1,id: props.id }))
                        //handleClickRat(index +1)
                      }
                      onHover={() => handleHover(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })
              : ratings.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      style={{ cursor: "cursor", marginRight: 10 }}
                      color={
                        (currentRating || currentHoverValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      /*onClick={() => handleClickRat(index + 1)}*/
                      onClick={() => dispatchTwo(updateUser({ ratings: index + 1,id: props.id }))}
                      onHover={() => handleHover(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                })}
          </div>

          <Typography
            className={classes.price}
            gutterBottom
            variant="h7"
            component="h2"
          >
            Price $ {props.price}
          </Typography>
          {/**  <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() =>
            dispatch(addToCartSaga({ image: props.image, price: props.price, product_id: props.id }))
          }
          className={classes.cart}
          size="small"
        >
          Add to Cart
        </Button>
       { user.role == "admin" ?  <BsTrash
          onClick={() =>
            dispatch(
              deleteDispatch({
                image: props.image,
                price: props.price,
                id: props.id,
              })
            )
          }
         
         className={classes.del}
        /> : null
             

      }
      </CardActions>

      { user.role == "admin"? <input className={classes.input} placeholder="update price" type="number" onChange={getPrice} />:
      null}
      <CardActions>
       { user.role == "admin"?
      <GrUpdate className={classes.update}
        onClick={() =>
          dispatch(
            updateUser({
              id: props.id,
              price: a,
            })
          )
        }
      />: null
        }
      </CardActions>
      
      
      {/* Update price */}
      
    </Card>
   
  );
}

export default Item;
