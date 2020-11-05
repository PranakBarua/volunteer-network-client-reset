import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData/volunteer';
import './Header.css'
import Event from '../Event/Event';
const Header = () => {
    const [events,setEvents]=useState(fakeData)
    console.log(events)
    return (
        <div className="header">
            <div className="search-part">
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input placeholder="search" type="text"/>
                <button className="search-button">Search</button>
            </div>
            <div className="row">
                {
                    events.map(event=><Event event={event} key={event.key}></Event>)
                }
            </div>
        </div>
    );
};

export default Header;