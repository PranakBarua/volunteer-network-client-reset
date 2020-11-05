import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowEvent from '../ShowEvent/ShowEvent';

const PersonalEvents = () => {
    const [personalEvent,setPersonalEvent]=useState([])
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/personalEvents?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setPersonalEvent(data)
            console.log(personalEvent)
        })
    },[personalEvent])
    return (
        <div className="row">
            {
                personalEvent.map(pv=><ShowEvent event={pv}></ShowEvent>)
            }
        </div>
    );
};

export default PersonalEvents;