import React from 'react'
import MenuItem from './MenuItem'

function Card({item}) {
  return (
    <div className="cart">Your Cart: {item}</div>
  )
}

export default Card