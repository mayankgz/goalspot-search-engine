import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
const  Example= (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.Description}
        </Card.Text>
        <Button variant="primary">{props.price}</Button>
        <Button variant="primary"> {props.duration}</Button>
        <a href={props.link}><button id='btn'>visit</button></a>
      </Card.Body>
    </Card>
  )

}
export default Example;
