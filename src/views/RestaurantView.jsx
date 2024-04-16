import './RestaruantView.css'
import spaghettiImage from "../assets/spaghetti.jpg"
import lasagnaImage from "../assets/lasagna.jpg"
import risottoImage from "../assets/risotto.jpg"
import MenuItem from '../exercises/lesson7/components/MenuItem'
import Card from '../exercises/lesson7/components/Card'
import { useState } from 'react'

const RestaurantView = (name) => {

  const [selectedMenuItem, setSelectedMenuItem] = useState([""]);
  const itemToCard = () => {
    console.log("Hallo")
    const newItem = name
    setSelectedMenuItem([...selectedMenuItem, newItem])
  }

  return (
    <>
      <h1>REDI React Restaurant</h1>
      <Card item={itemToCard}
      {selectedMenuItem.map((item, index) => (
        <li key={index}>{item}</li>
      ))} />
      <div className="menu">
        <MenuItem name="Spagetti" imageSrc={spaghettiImage} />
        <MenuItem onClick={itemToCard} name="Lasagna" imageSrc={lasagnaImage} />
        <MenuItem name="Risotto" imageSrc={risottoImage} />
      </div>
    </>
  )
}

export default RestaurantView
