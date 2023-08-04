import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/loginPage/LoginPage'
import SignUp from "./pages/sign-up/SignUp";
import Subscripions from './pages/subscript/subscriptions';
import AuthContext from './assets/constants/contexts/AuthContext';
import SubscriptionId from './pages/subscript/SubscriptionIdPlano';
import HomePage from './pages/home/HomePage';



function App() {

  const [token, setToken] = useState('')
  const contexto = {token, setToken};

  localStorage.setItem("savedToken", {token});


  return (
    <AuthContext.Provider value={contexto}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/subscriptions" element={<Subscripions />} />
          <Route path="/subscriptions/:idPlano" element={<SubscriptionId/>} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
