import { useCart } from '../context/CartContext'
import { formatCurrency } from '../utils/formatCurrency'
import { products } from '../data/products'
import CartItem from './CartItem'
import React from 'react'

type CartProps = {
    isOpen: boolean
}

const Cart = ({ isOpen }: CartProps) => {
    const { closeCart, cartItems } = useCart()
    const cartClassName = isOpen ? 'cart' : 'cart hidden'
    const overayClassName = isOpen ? 'cartOverlay' : '' 

    const handleOutsideInteraction = (e: React.MouseEvent<HTMLElement>) => {
        closeCart()
    }
    const stopEventPropagation = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
    }

    return (
        <div className={overayClassName} onClick={handleOutsideInteraction}>
            <div className={cartClassName} onClick={stopEventPropagation}>
                <div className="cartHeader">
                    <h3>Panier</h3>
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