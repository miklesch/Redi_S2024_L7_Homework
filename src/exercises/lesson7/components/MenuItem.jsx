import React, { useState } from 'react'
import Card from './Card'


const MenuItem = ({ name, imageSrc }) => {

    const [selectedMenuItem, setSelectedMenuItem] = useState([""]);
    const itemToCard = () => {
        const newItem = name;
        setSelectedMenuItem([...selectedMenuItem, newItem])
        HandleCallback();
    }

    return (
        <li className="menuItem">
            <Card item={selectedMenuItem} />
            <h3>{name}</h3>
            <img src={imageSrc} alt={name} />
            <button onClick={itemToCard}>Add To Cart</button>
        </li>
    )
}

export default MenuItem