import React from 'react'

type proType = {
    name: string,
    price: number,
    image: string
}

function Prod(props:proType) {
  return (
     <>
      <div>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <img src={props.image} alt="" />
      </div>
     </>
  )
}

export default Prod