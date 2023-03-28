import React from 'react'
import Home3 from './Home3'
import { useState } from 'react'
export default function Search() {
    const[val,setval]=useState('');
    const updateName = (event) => {
        setval(event.target.value);
      };
    const search_courses=(val)=>{
    }
    console.log(val);
  return (
    <div>
        <form>
        <input
          type='text'
          value={val}
          onChange={updateName}
          placeholder='Please enter course'
          style={{ padding: '5px 15px', width: 400, fontSize: 17 }}
        />
      </form>
      <br/><br/>
      <Home3 genre={val} id={val}/>
    </div>
  )
}
