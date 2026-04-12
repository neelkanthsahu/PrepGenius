import React, { use } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import InterviewPage from "./pages/InterviewPage";
import { useDispatch } from 'react-redux';
import { setUserdata } from './redux/userSlice';
import axios from 'axios';

export const serverURL="http://localhost:8000";
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    const getUser=async()=>{
      try{
        const result=await axios.get(serverURL+"/api/user/current-user", {withCredentials:true});
        console.log("BEFORE DISPATCH");
        dispatch(setUserdata(userData));
        console.log("AFTER DISPATCH");
      }catch(error){
        console.error(error);     
        dispatch(setUserdata(null));
      }
      getUser();
    }
   }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/interview" element={<InterviewPage />} />
    </Routes>
  )
}

export default App;