import React, { useEffect } from 'react'
import "./Css.css"
function Child({data,setData}) {

const remove=(index)=>{
  let removeData=[...data];
  removeData.splice(index,1);
    localStorage.setItem("item",JSON.stringify(removeData));
    setData(removeData);
}


    useEffect(()=>{
      let getData=JSON.parse(localStorage.getItem("item"));
console.log(getData); 
if(getData){
  setData(getData);
  console.log(data);
}
    },[]);
  return (
    <div className='child'>
      <h1>Child Component</h1>
      <ul>
        {
          data && data.map((item,index)=>(
            <li key={index}>{item.name}-${item.price} <button onClick={()=>remove(index)}>Remove</button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default Child
