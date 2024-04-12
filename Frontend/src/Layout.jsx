import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { isAuthorizedContext } from './context/CustomContext';
import axios from 'axios';

const Layout = () => {

const {isAuthorized, setIsAuthorized, user, setUser} = useContext(isAuthorizedContext);
// console.log(user)

useEffect(() => {
  const fetchUser =async () => {
    // console.log("Ind")
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/v1/user/getuser`,{
        withCredentials: true
      });
      // console.log(response.data.user);
      setIsAuthorized(true);
      setUser(response.data.user);
      console.log("user")
      console.log(user)
      console.log("user")
    } catch (error) {
      console.log(error)
    }
  }
  fetchUser()
}, [isAuthorized])

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout