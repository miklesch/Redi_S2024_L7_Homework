import React, { useState } from 'react'
import Basket from './Basket';
import MusikStoreView from '../../../views/MusikStoreView';


const AlbumItem = ({ name, imageSrc }) => {


    const [selectItem, setSelectItem] = useState([""]);
    const addItemToBasket = () => {
        const newItem = name
        setSelectItem ([...selectItem, newItem])
    }
    /* const removeItem = () => {
        const removeItem = name
        setSelectItem ([...selectItem, ])
    } */


    return (
            <li className="menuItem">
                {/* <Basket item={selectItem}/> */}
                <h3>{name}</h3>
                <img src={imageSrc} />
                <button onClick={addItemToBasket}>Add to Basket</button>
                {/* <button onClick={removeItem}>Remove Item from Basket</button> */}
            </li>
    )
}

export default AlbumItem