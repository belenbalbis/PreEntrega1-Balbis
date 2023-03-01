import "./cartwidget.css"
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className= "cart"> 
    <div className="cartButton">
    <button className= "number" >0</button>
    </div>
        <div className= "item"><FaShoppingCart /></div>
        </div>
  )
}

export default CartWidget