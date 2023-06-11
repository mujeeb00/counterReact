import React from 'react'
import { useState } from 'react'

const Task1 = () => {
    let [number,setNumber]=useState(0);

    function Increament(){
        setNumber(number+1);
    }

    function Decreament(){
       if(number>0){
        setNumber(number-1)
       }
    }
  return (
    <div className='container '>
    <h1>Number : {number}</h1>
      <button  className='btn btn-outline-success me-3' onClick={Increament}>Increament</button>
      <button  className='btn btn-outline-danger'onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default Task1
