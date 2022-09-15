import { useCart } from '../context/CartContext'
import CartItem from './Cartitem'

type CartProps = {
    isOpen: boolean
}

const Cart = ({ isOpen }: CartProps) => {
    const { closeCart, cartItems } = useCart()
    const cartClassName = isOpen ? 'cart' : 'cart hidden'

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h5>Pannier</h5>
                <button onClick={closeCart}>Close</button>
            </div>
            <div className="cartContent">
                <CartItem />
            </div>
        </div>
    )
}

export default Cart