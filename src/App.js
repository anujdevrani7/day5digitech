
import './App.css';
import {  useState } from 'react';
import React from 'react';
// import Box from './Component/Box';



function App() {
  const [first, setfirst] = useState(0)
  return (
    <div className="container py-3">
      <div className="form-floating mb-3">
        <input type="email" className="form-control" onChange={(e) => { setfirst(e.target.value) }} value={first} id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Enter number</label>
      </div>
      
      <div className="container">
        {/* {
          Array(first).fill("").map(()=>{
            return(
              <div className="box"></div>
            )
          })
        } */}
        {
          Array((+first)).fill("").map(()=>{
            // console.log(first)
            return(
              
              <div className="box">

              </div>
            )
          })
        }
        
      


      </div>
    </div>





  );
}

export default App;
