import { useState } from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/loginPage/LoginPage'
import SignUp from "./pages/sign-up/SignUp";
import Subscripions from './pages/subscript/subscriptions';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/subscriptions" element={<Subscripions/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
