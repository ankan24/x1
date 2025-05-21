import React from 'react'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
   <>
    <h3>Auth page</h3>
    <Outlet/>
   </>
  )
}

export default Auth