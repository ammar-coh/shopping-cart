import React, { useEffect } from "react";
import { getUser } from "./redux/actions/index";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemContainer from "./ItemContainer";
import { useSelector, useDispatch } from "react-redux";

import Editing from "./editing";
const useStyles = makeStyles({
  root: {
    display: "grid",
    gridGap: '0px 0px',

    gridTemplateColumns: '220px 220px 220px 220px 220px 220px 220px',
    marginLeft: 0,
    border: "solid black",

   
  },

  edit: { border: "solid black", marginLeft: 50, width: "400px" },
  fog: {
    border: "solid black",
  },
});

function Product() {
  const classes = useStyles();
  const details = useSelector((state) => state.productDetails.details);
  const header = useSelector((state) => state.productDetails.header);

  //const {image}= details
  console.log(details, "details");
  return (
    <div>
      <h1>{header}</h1>
      <div className={classes.root}>
        {/*<Grid item>*/}
        {details.length > 0 &&
          details.map((i) => (
            <div >
              <ItemContainer
                image={i?.image}
                price={i.price}
                year={i.year}
                id={i.id}
                rating={i.rating}
              />
            </div>
          ))}
      </div>
      {/**  </Grid>*/}
    </div>
  );
}

export default Product;
