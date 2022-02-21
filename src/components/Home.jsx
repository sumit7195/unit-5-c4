import React, { useState } from "react";
import axios from "axios"
import { Result } from "./Result";
import { Navbar } from "./Navbar";

import {useSelector, useDispatch} from "react-redux"

const myContext = React.createContext();


export const Home  = ()=>{

  const [value, setValue] = useState("");

  const [data, setData] = useState([])  
  

  const handleClick = ((e)=>{

   
    setValue(e.target.value)
    
  })


  const handleSubmit = ((e)=>{
    
    e.preventDefault()
    
    axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${value}`)
 .then((data)=> setData(data.data)).catch((error)=> console.log(error))
 
  })

//   console.log(data)


  return(
    <myContext.Provider value={data}>

   <div>
        <form>
      <input type="text"  className="search-box"   value={value}  onChange={handleClick}   placeholder="search..."/>
      <button onClick={handleSubmit}>Enter</button>
         </form>
   
     <Navbar searchData={data}>



   </Navbar>
     
     <Result result={data}></Result>
   

   </div>
    

</myContext.Provider>
  
   
  )



}