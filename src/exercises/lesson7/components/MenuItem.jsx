import React, { useState } from 'react'
import Card from './Card'
import RestaurantView from '../../../views/RestaurantView'


const MenuItem = ({ name, imageSrc, itemToCard, onClick, selectedMenuItem }) => {

    return (
        <>
            <li className="menuItem">
                <h3>{name}</h3>
                <img src={imageSrc} alt={name} />
                <button onClick={itemToCard}>Add To Cart</button>
                {/* {selectedMenuItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))} */}
                {console.log(onClick)}
            </li>
        </>
    )
}

export default MenuItem