import ddLogo from '../img/dd_logo.jpeg'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
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
        </nav>
    )
}

export default MainNavigation