import React, { useEffect, useState } from 'react';
import './ShowEvent.css'
const ShowEvent = (props) => {
    const [event,setEvent]=useState({})

    //console.log(props.event)
    const {img,name,email,selectedDate,_id}=props.event
    const deleteEvent=(event,id)=>{
        console.log(event.target,id)
        fetch('http://localhost:5000/delete/'+id,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                
            }
        })
    }
    return (
        
            <div className="col-md-5 col-sm-6 event">
               <div className='img-part'>
                   <img src={img} alt=""/>
               </div>
               <div className="description-part">
                    <h4>{props.event.data.description}</h4>
                    <br/>
                    <h5>{selectedDate}</h5>
               </div>
               <div className="d-flex align-items-end delete-button">
                   <button onClick={()=>deleteEvent(event,props.event._id)} className="search-button">Delete</button>
               </div>
            </div>
    );
};

export default ShowEvent;