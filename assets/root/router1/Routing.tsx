import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Auth from './Auth'
import Login from './Login'
import Signup from './Signup'
import Navigatepage from './Navigatepage'
import Reciveparams from './Reciveparams'

function Routing() {
  return (
    <> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/auth/" element={<Auth/>}>
                <Route path='login' element={<Login/>} />
                {/* <Route path='/login' element={<Login/>} /> */}
                <Route path='signup' element={<Signup/>} />
            </Route>
            <Route path='/nav' element={<Navigatepage/>} />
            <Route path='/sendparams/:paramObj' element={<Reciveparams/>} />
        </Routes>
    </>
  )
}
// why not /login => inside nested route child should not be start with abslute path,
//it must be relative path
export default Routing