import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export function ProtectedRoutes(props) {
  if (localStorage.getItem('user')) {
    return props.children
  } else {
    return <Navigate to='/login'></Navigate>
  }
}

export default App