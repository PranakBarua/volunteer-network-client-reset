import React, { useEffect, useState } from 'react';
import AdminInfo from '../AdminInfo/AdminInfo';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const containerStyle={
        backgroundColor:"#F4FDFB",
        height:"100%"
    }
    return (
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-3 mr-5 col-sm-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 col-sm-10">
                <AdminInfo></AdminInfo>
            </div>
        </div>
    );
};

export default Dashboard;