import {useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch= useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
          
    })
    .finally(()=> setLoading(false)) 
  }, [])



  return !loading ? (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden ">
      <Header />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
  
}

export default App
