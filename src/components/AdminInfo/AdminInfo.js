import React, { useEffect, useState } from 'react';

const AdminInfo = () => {
    const [admins,setAdmins]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/admins')
        .then(res=>res.json())
        .then(data=>setAdmins(data))
    })
    return (
        <div>
             <table className="table table-borderless">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Registarting Date</th>
                        <th>Volunteer List</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admins.map((admin,index)=>
                           <tr>
                               <td>{index+1}</td>
                               <td>{admin.name}</td>
                               <td>{admin.email}</td>
                               <td>{admin.date}</td>
                               <td>{admin.volunteer}</td>
                               
                           </tr> 
                            
                            )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AdminInfo;