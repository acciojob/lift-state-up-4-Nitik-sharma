import React, { useState } from 'react'
import './Css.css'
import Child from './Child';
function Parent() {
   const [name ,setName]=useState("");
   const [price,setPrice]=useState("");
   const [data,setData]=useState([]);
    
    const addData=()=>{
        let newData={
            name:name,
            price,price
        }
        let updateData=[...data];
        updateData.push(newData);


        setData(updateData);
        setPrice("");
        setName("");
        localStorage.setItem("item",JSON.stringify(updateData));
    }
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <div className='input'>
       <div>
        <p>item Name</p>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
       </div>
        <div>
            <p>item Price</p>
            <input type='number' onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <button onClick={addData}>Add</button>
      </div>
      <Child data={data} setData={setData}/>
    </div>
  )
}

export default Parent
