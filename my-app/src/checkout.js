import React from "react";
import CheckoutContainer from "./CheckoutContainer";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Subtotal from "./Subtotal";
import Changecontainer from "./Changecontainer";

const useStyles = makeStyles({
  main: {},
  root: {
    marginLeft: "50px",

    marginTop: 10,
    display: "flex",
  },
  total: {
    marginLeft: 100,

    width: "400px",
  },

  mind: {
    width: "400px",
    marginLeft: "950px",
    border: "solid black",
    marginTop: "00px",
    height: "fit-content",
  },
  head: {
    marginLeft: 170,
    border: "solid black",
    height: "30px",
    width: "40px",
  },
  pro: {
    marginTop: "40px",
    marginLeft: "50px",
  },
  headTwo: {
    border: "solid black",
    width: "140px",
    marginLeft: "40px",
  },
  trol: {
    height: "fit-content",
    width:'400px'
  },
});

function Checkout() {
  const classes = useStyles();
  const counts = useSelector((state) => state.checkout);
  console.warn(counts);

  return (
    <div className={classes.main}>
      <div className={classes.total}>
        <h2>Total</h2>
        <Subtotal />
      </div>

      <div className={classes.root}>
        <div className={classes.trol}>
          <h3 className={classes.head}>Cart</h3>
          <div className={classes.pro}>
            {" "}
            {counts.map((i) => (
              <CheckoutContainer image={i.cart.image} price={i.cart.price} />
            ))}
          </div>
        </div>

        <div className={classes.mind}>
          <h3 className={classes.headTwo}>Not purchasing</h3>
          <div style={{}}>
            {" "}
            <Changecontainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
