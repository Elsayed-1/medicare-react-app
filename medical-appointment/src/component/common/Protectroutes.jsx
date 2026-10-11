import React from 'react'
import { useAuth } from '../../context/AuthContext/Authenticationcxt'
import { Navigate    } from 'react-router-dom'

function Protectroutes({children}) {
    const {islogged}=useAuth()
   

  if(!islogged){
    return <Navigate to="/login" replace /> 
  }

  return (
    children
  )
}

export default Protectroutes
