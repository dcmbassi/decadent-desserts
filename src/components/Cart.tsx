import { useCart } from '../context/CartContext'

type CartProps = {
    isOpen: boolean
}

const Cart = ({ isOpen }: CartProps) => {
    const { closeCart } = useCart()
    const cartClassName = isOpen ? 'cart' : 'cart hidden'

    return (
        <div className={cartClassName}>
            <div className="cartContent">
                <h5>Pannier</h5>
                <button onClick={closeCart}>Close</button>
            </div>
        </div>
    )
}

export default Cart