import React, { useEffect } from "react";
import { getUser } from "./redux/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemContainer from "./ItemContainer";
import { useSelector, useDispatch } from "react-redux";

import Editing from "./editing";
const useStyles = makeStyles({
  root: {
    display: "flex",

    marginLeft: 0,
  },
  information: {
    display: "flex",
    border: "solid black",
  },
  edit: { border: "solid black", marginLeft: 50, width: "400px" },
});

function Product() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const details = useSelector((state) => state.productDetails.details);
  const header = useSelector((state) => state.productDetails.header);

  //const {image}= details
  //console.log(details,'details')
  return (
    <div>
      <h1>{header}</h1>
      <Grid container >
        {details &&
          details.map((i) => (
         
              <ItemContainer
                image={i.image}
                price={i.price}
                year={i.year}
                id={i.id}
                rating={i.rating}
              />
          
          ))}
          </Grid>
     
    </div>
  );
}

export default Product;
