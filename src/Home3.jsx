import React, { useEffect, useState } from "react"
import Example from "./card"
import './Home.css'
const Home3 = (props) => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://raw.githubusercontent.com/mayankgz/fake-api-1/main/FAKE_API.JSON")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <div id="home">
      {/* {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.genre}</li>
          ))}
        </ul>
      )} */}
      
      {users.filter((user)=>user.genre.toLowerCase().includes(props.genre) || user.id==props.id).map(user=>(
            <Example image={user.image} price={user.price} title={user.title} Description={user.Description} duration={user.duration} link={user.Link}/>  
      ))}     
    </div>
  );
}

export default Home3;