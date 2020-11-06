import React from 'react';
import { useForm } from 'react-hook-form';
import HeaderTop from '../Header/HeaderTop';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const date=new Date().toDateString();
        const admin={...data,date}
        fetch('http://localhost:5000/addAdmin',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(admin)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Admin saved successfully')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    };
    return (
        <div>
            <div>
                <HeaderTop></HeaderTop>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div className="register-area ">
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            
                        <input name="name" ref={register({ required: true })} placeholder="Full Name"/>
                        {errors.name && <span className="error">name is required</span>}

                        <input name="email" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">Email is required</span>}
                        
                        <input name="volunteer" ref={register({ required: true })}  placeholder="Volunteer"/>
                        {errors.volunteer && <span className="error">volunteer is required</span>}
                        
                        <input type="submit" />
                    </form>
                </div> 
            </div>
        </div>
    );
};

export default AddAdmin;