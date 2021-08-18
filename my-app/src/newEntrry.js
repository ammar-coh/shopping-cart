import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import {  useDispatch } from "react-redux";
//import {getUser} from './redux/actions/index'




const useStyles = makeStyles({
    root: {
   
   
    marginLeft:30,
    },
    disp:{
        marginTop:40,
    },
    
  });

function Entry(props) {
    const classes = useStyles();
    const [data,setData]= useState('')
    //const dispatch = useDispatch();
    const [price,setPrice] = useState('')
   
   //console.log('datas',data.id)
    const getData=(val)=>{
        setData(val.target.value)
        
    }
    //console.log ('data',data)
   const getPrice=(event)=>{
       setPrice(event.target.value)
   }
   //console.log('price',price)
    return (
        <div className={classes.root}>
             <h1 className={classes.disp}>{data}</h1>
           <input  type = 'number' onChange={getData}/> 
           <input  type = 'number' onChange={getPrice}/> 
          
           <button onClick={()=>props.updateData({id:data,
        price:price})}>click here</button>
        </div>
    )
}

export default Entry
