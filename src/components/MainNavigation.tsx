import ddLogo from '../img/dd_logo.jpeg'
import cart from '../img/cart.png'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const MainNavigation = () => {
    const { openCart, cartQuantity } = useCart()
    return (
        <nav className="mainNav">
            <div className="logo">
                <img src={ddLogo} alt="Decadent Desserts" />
            </div>
            <ul className='navMenu'>
                <NavLink to='/'>
                    <li className='navItem'>Accueil</li>
                </NavLink>
                <NavLink to='/products'>
                    <li className='navItem'>Produits</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='navItem'>A propos</li>
                </NavLink>
            </ul>
            {!!cartQuantity && (
                <button onClick={openCart} className='cartButton' data-value={cartQuantity}>
                    <img src={cart} alt='Shopping cart' />
                </button>
            )}
        </nav>
    )
}

export default MainNavigation