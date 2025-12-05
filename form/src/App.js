import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
function App() {

  const[isLoggedin,setIsloggedin]=useState(false);
  return (
    <div className=' flex flex-col w-screen h-screen bg-richblack-900'>
      <Navbar isLoggedin={isLoggedin} setIsloggedin={setIsloggedin}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsloggedin={setIsloggedin}/>}/>
        <Route path='/signup' element={<Signup setIsloggedin={setIsloggedin}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedin={isLoggedin}>
              <Dashboard/>
            
            </PrivateRoute>
          }/>
      </Routes>
    </div>
  );
}

export default App;
