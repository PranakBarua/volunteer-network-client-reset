import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import fakeData from '../../fakeData/volunteer';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const Register = () => {
    const {name}=useParams()
    const eventInfo=fakeData.find(event=>event.name===name)
   
    const image=eventInfo.img
    console.log(image)
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const newUser={
            name:loggedInUser.name,
            email:loggedInUser.email
        }
        const event={...newUser,data,selectedDate,img:image}
        fetch('http://localhost:5000/addEvent',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(event)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('your event saved successfully')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    };
    const handleDateChange = (date) => {
        setSelectedDate(date.toDateString());
    };
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="register-area ">
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name"/>
      {errors.name && <span className="error">name is required</span>}

      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="UserName or Email" />
      {errors.email && <span className="error">Email is required</span>}

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="">
              <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"

              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                  'aria-label': 'change date',
              }}
              />
              
          </Grid>
      </MuiPickersUtilsProvider>
      
      <input name="description" ref={register({ required: true })}  placeholder="Description"/>
      {errors.description && <span className="error">Description is required</span>}

      <input name="library" defaultValue={name} ref={register({ required: true })}  placeholder="Organize books at the library"/>
      {errors.library && <span className="error">Organizer is required</span>}
      
      <input type="submit" />
      </form>
            </div> 
        </div>

    );
};

export default Register;