import React,{useState} from 'react'
import '../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {changeColor,changeStyle } from '../actions/index.js';

const App = () => {

  const [color,setColor]=useState("red");
  const [fontFamily,setfontFamily]=useState("Arial");
  const handleClick=(e)=>{
    const id= e.target.id;
    if(id=="colorBtn"){
     setColor((prev)=>prev=='red'?"green":"red");
      return;
    }
      
  setfontFamily((prev)=>prev=='Arial'?"Georgia":"Arial");
  }
  return (
    <div id="main">
      <h1 id='text' style={{color, fontFamily}}>Newton School</h1>
      <button id='colorBtn' onClick={handleClick}>Change Color</button>
      <button id='styleBtn' onClick={handleClick}>Change Style</button>

    </div>
  )
}


export default App;
