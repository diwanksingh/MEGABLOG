import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
    <div className='fixed w-full top-0 left-0 z-10 bg-white opacity-90'>
      <Header />
    </div>
    <main className="flex-grow min-h-screen"> 
      <Outlet />
    </main>
    <div ><Footer /> </div>
  </>
  
  ) : null
}

export default App
