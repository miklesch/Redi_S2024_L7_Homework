import React from 'react'
import "./MusikStoreView.css"
import machineGirlImage from "../assets/machineGirl.jpg"
import nowNotYetImage from "../assets/nowNotYet.jpg"
import radioheadImage from "../assets/radiohead.jpg"
import unknownArtist from "../assets/unknownArtist.jpg"
import AlbumItem from '../exercises/lesson7/components/AlbumItem'
import Basket from '../exercises/lesson7/components/Basket'

const MusikStoreView = () => {
    return (
        <div>
            <h2>Redi Musik Store</h2>
            <Basket />
            <div className='menu'>
                <AlbumItem name="Machine Girl" imageSrc={machineGirlImage} />
                <AlbumItem name="Now Not Yet" imageSrc={nowNotYetImage} />
                <AlbumItem name="Radiohead" imageSrc={radioheadImage} />
                <AlbumItem name="Unknown Artist" imageSrc={unknownArtist} />

            </div>
        </div>
    )
}

export default MusikStoreView