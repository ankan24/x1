import React from 'react'
import pro from './pro.json';
import Prod from './components/Prod';


function App() {
  return (
     <>
      {pro.map((item)=>(
        <Prod name={item.name} price={item.price} image={item.image} />
      ))}
     </>
  )
}

export default App