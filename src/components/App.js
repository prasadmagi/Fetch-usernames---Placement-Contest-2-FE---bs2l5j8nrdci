import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
const App = () => {
//code here 
 const [name,setname] = useState([]);
 const [id,setid] = useState(1);
useEffect(()=>{
  fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    setname(data)
  })
},[id])

const changeInput = (e)=>{
  
  setid(e.target.value)
}

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name.name}</p>
    </div>
  );
}


export default App;
