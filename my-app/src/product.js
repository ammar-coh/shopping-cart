import React, {useEffect} from 'react';
import {getUser} from './redux/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import ItemContainer from './ItemContainer';
import { useSelector, useDispatch } from "react-redux";
import EntryContainer from './EntryContainer';
import Editing from './editing'
const useStyles = makeStyles({
    root: {
     display:'flex',
   
    marginLeft:0,
    },
    information:{
        display:"flex",
        border:'solid black',
    },
    edit:{ border:'solid black',
                    marginLeft:50,
                width:'400px',}
    
  });

function Product() {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])
    const details=useSelector((state)=>state.productDetails.details);
    const header=useSelector((state)=>state.productDetails.header);

    //const {image}= details
console.log(details,'details')
    return (
        <div>
            <h1>{header}</h1>
        <div className={classes.root}>
           {details && details.map(i=>(
               i.id<=7 ?
               <ItemContainer image ={i.image}
               price= {i.price}
               year ={i.year}
               id={i.id}/> : null
           ))}
        </div>
        <div className={classes.root}>
            {details && details.map(i=>(
                i.id >= 8  && i.id<=14 ?
                <ItemContainer image ={i.image}
                price= {i.price}
                id={i.id}
                year ={i.year}/> : null
            ))}
        </div>

        <div className={classes.root}>
            {details && details.map(i=>(
                i.id >= 16 && i.id<=21 ?
                <ItemContainer image ={i.image}
                price= {i.price}
                id={i.id}
                year ={i.year}
                rating={i.rating}/> : null
            ))}
        </div>

        <div className={classes.root}>
            {details && details.map(i=>(
                i.id >= 22 && i.id<=29 ?
                <ItemContainer image ={i.image}
                price= {i.price}
                id={i.id}/> : null
            ))}
        </div>
                    <div className={classes.information}>
        <div>
            <EntryContainer/>
        </div>
        {/*<div className={classes.edit}><Editing/></div>
                   </div>*/}
</div>
           
        </div>
    )
}

export default Product

