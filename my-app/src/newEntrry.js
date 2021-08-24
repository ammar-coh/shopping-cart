import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import {  useDispatch } from "react-redux";
//import {getUser} from './redux/actions/index';
import { useSelector, useDispatch } from "react-redux";
import {addToSaga} from './redux/actions/index'




const useStyles = makeStyles({
    root: {
   
   
    marginLeft:30,
    },
    disp:{
        marginTop:40,
    },
    inputOne:{marginTop:10,},
    inputTwo:{marginTop:10,
    },
    year:{
          width:'160px',  
    },
    click:{marginTop:10},

    
  });

function Entry(props) {
    const classes = useStyles();
    const [data,setData]= useState('')
    //const dispatch = useDispatch();
    const [price,setPrice] = useState('')
    const dispatch = useDispatch()
   
   //console.log('datas',data.id)
    const getData=(val)=>{
        setData(val.target.value)
        
    }
    //console.log ('data',data)
   const getPrice=(event)=>{
       setPrice(event.target.value)
   }
   //console.log('price',price)
   var pri=parseInt(price)
   const [year,setYear] = useState('')
   const getYear=(event)=>{
       setYear(event.target.value)
   }
   const [rating,setRatings] = useState('')
   const getRatings=(event)=>{
    setRatings(event.target.value)
}
   console.log(rating)
   var rat = parseInt(rating)
    return (
        <div className={classes.root}>
             <h1 className={classes.disp}> add</h1>
           <input className={classes.inputOne} type = 'text' onChange={getData}/>
           <div> 
           <input className={classes.inputTwo} type = 'number' onChange={getPrice}/> 
           </div>
           <div>
           <select  onChange={getYear} className={classes.year}>
           <option value="" default selected>Year of release</option>
           <option value="1999">1999</option>
    <option value="1991">1991</option>
    <option value="1998">1998</option>
    <option value="1994">1994</option>
    
  </select>
           </div>
           <div>
        <select onChange={getRatings}className={classes.year}>
        <option value="" default selected>Ratings</option>
           <option placeholder ='year' value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
        </select>
           </div>
           <div>
         
           </div>
           <div>
           <button className={classes.click} onClick={()=>dispatch(addToSaga({image:data,price:pri,year:year, rating:rat}))}>add item</button>
           </div>
        </div>
    )
}

export default Entry
