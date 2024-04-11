import './RestaruantView.css'
import spaghettiImage from "../assets/spaghetti.jpg"
import lasagnaImage from "../assets/lasagna.jpg"
import risottoImage from "../assets/risotto.jpg"
import MenuItem from '../exercises/lesson7/components/MenuItem'
import Card from '../exercises/lesson7/components/Card'

const RestaurantView = () => {


  return (
    <>
      <h1>REDI React Restaurant</h1>
      <div className="menu">
        <MenuItem name="Spagetti" imageSrc={spaghettiImage} />
        <MenuItem name="Lasagna" imageSrc={lasagnaImage} />
        <MenuItem name="Risotto" imageSrc={risottoImage} />
      </div>
    </>
  )
}

export default RestaurantView
