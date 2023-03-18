import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./navbar.css"


const Navbar = () => {
  return (
    <nav className="container">
      <Link to= "/">
      <p className= "navitem">Home</p>
      </Link>
      <Link to= "/category">
      <p className= "navitem">Productos</p>
      </Link>
      {/* <Link to= "/item/:id">
      <p classname= "navitem" >Detalles productos</p>
      </Link> */}
        <CartWidget />
    </nav>
  )
}

export default Navbar