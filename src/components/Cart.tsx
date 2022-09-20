import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { products } from '../data/products'
import CartItem from './CartItem'

type CartProps = {
    isOpen: boolean
}

const Cart = ({ isOpen }: CartProps) => {
    const { closeCart, cartItems } = useCart()
    const cartClassName = isOpen ? 'cart' : 'cart hidden'
    const overayClassName = isOpen ? 'cartOverlay' : '' 

    return (
        <div className={overayClassName}>
            <div className={cartClassName}>
                <div className="cartHeader">
                    <h3>Pannier</h3>
                    <button onClick={closeCart}>&times;</button>
                </div>
                <div className="cartContent">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="cartTotal">
                        Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = products.find(product => product.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart