import { Link } from "react-router-dom"
import styles from "./card.css"


const Card = ({producto}) => {
  return (
    <Link to= {`${producto.id}`}>
    <div className= "cardcontainer">
        <h4>{producto.title}</h4>
        <img src={producto.image} alt="" width={200}/>
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
    </div>
    </Link>
  )
}

export default Card