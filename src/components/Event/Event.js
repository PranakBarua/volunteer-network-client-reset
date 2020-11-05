import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Event.css'
const Event = (props) => {
    const {name,img}=props.event
    console.log(img)
    // const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    // const newUser={...loggedInUser,image:img}
    // setLoggedInUser(newUser)
    return (
        <div className="all-event col-md-3">
            <Link to={`/register/${name}`}>
                <Card style={{ width: '18rem' }}>
                <Card.Img  className="img" variant="top" src={img} />
                <Card.Body className="title-body">
                <Card.Title className="title-color">{name}</Card.Title>
                </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Event;