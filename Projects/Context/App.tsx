
import React from 'react'
import { UserProvider } from './components/UserContext'
import Home from './components/Home'
import ProductTable from './components/ProductTable'

function App() {
  return (
     <>
     <UserProvider>
      <Home/>
     </UserProvider>
     </>
  )
}

export default App