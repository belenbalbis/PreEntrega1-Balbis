import "./navbar.css"
import CartWidget from "./CartWidget/CartWidget"


const Navbar = () => {
  return (
    <nav className="container">
        <a href=""><p className= "navitem">Inicio</p></a>
        <a href=""><p className= "navitem">Indumentaria</p></a>
        <a href=""><p className= "navitem">Calzado</p></a>
        <a href=""><p className= "navitem">Contacto</p></a>
        <CartWidget />
    </nav>
  )
}

export default Navbar