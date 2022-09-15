import ddLogo from '../img/dd_logo.jpeg'
import cart from '../img/cart.png'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const MainNavigation = () => {
    const { openCart, cartQuantity } = useCart()
    return (
        <nav className="mainNav">
            <div className="logo">
                <img src={ddLogo} alt="Decadent Desserts" />
            </div>
            <ul className='navMenu'>
                <Link to='/'>
                    <li className='navItem'>Home</li>
                </Link>
                <Link to='/products'>
                    <li className='navItem'>Products</li>
                </Link>
                <Link to='/about'>
                    <li className='navItem'>About</li>
                </Link>
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