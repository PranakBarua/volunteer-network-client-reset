import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HeaderTop from './components/Header/HeaderTop';
import PersonalEvents from './components/PersonalEvents/PersonalEvents';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Dashboard from './components/Dashboard/Dashboard';
export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    isSignedIn:false
  })
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>    
       <Switch>
         <Route path="/header">
           <Header></Header>
         </Route>
         <PrivateRoute path="/register/:name">
           <Register></Register>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/addAdmin">
           <AddAdmin></AddAdmin>
         </Route>
         <Route path="/dashboard">
           <Dashboard></Dashboard>
         </Route>
         <PrivateRoute path="/events">
           <PersonalEvents></PersonalEvents>
         </PrivateRoute>
         <Route path="/">
           <Header></Header>
         </Route>
       </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
