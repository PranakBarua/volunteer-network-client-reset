import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import './Login.css'
import HeaderTop from '../Header/HeaderTop';
if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {

    const [user,setUser]=useState({
        isSignedIn:false,
        name:'',
        email:''
    })
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const history=useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            const {displayName,email}=result.user;
            const newUser={
                isSignedIn:true,
                name:displayName,
                email:email
            }
            setUser(newUser)
            setLoggedInUser(newUser)
            console.log(newUser)
            storeAuthToken();
          })
          .catch(function(error) {
            
          });
    }
    const storeAuthToken=()=>{
       
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken)
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div>
            <div>
                <HeaderTop></HeaderTop>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="login-area ">
                    <button className="loginButton search-button" onClick={handleGoogleSignIn}>Google Sign In</button>
                </div> 
            </div>
        </div>
    );
};

export default Login;