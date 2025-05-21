import React from 'react'
import { useLocation } from 'react-router-dom'
interface locationType{
    from:string,
    with:{
        name:string,
        age:number
    }
}
function Navigatepage() {
    const location=useLocation()
    const locationObj =location.state as locationType
  return (
    <>
    <div>Navigatepage</div>
    <h2>{locationObj?.from}</h2>
    <p>{locationObj?.with.name} && {locationObj?.with.age}</p>
    </>
  )
}


export default Navigatepage