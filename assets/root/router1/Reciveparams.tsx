import React from 'react'
import { useParams } from 'react-router-dom'

function Reciveparams() {
    const {paramObj}=useParams()
  return (
    <>
    <div>Reciveparams</div>
    <p>{paramObj}</p>
    </>
  )
}

export default Reciveparams