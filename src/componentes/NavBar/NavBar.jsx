import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>GameSTORagE</h1>

        <nav>
            <ul>
                <li>Deportes</li>
                <li>Aventura</li>
                <li>Accion</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar