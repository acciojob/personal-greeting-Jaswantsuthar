import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[event,setEvent]=useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name</p>
        <input type="text" onChange={(e)=>{
          setEvent("hello "+e.target.value+"!")
        }}/>
        <div>{event}</div>
    </div>
  )
}

export default App
