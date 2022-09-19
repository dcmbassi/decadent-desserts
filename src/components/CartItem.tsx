import { useCart } from "../context/CartContext"
import { products } from '../data/products'
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}
const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeItem } = useCart()
    const item = products.find(product => product.id === id)

    if (item == null) return null

    return (
        <div className='cartItem'>
            <div className="item">
                {item.imageUrl && (
                    <div className="itemImage">
                        <img src={item.imageUrl} />
                    </div>
                )}
                <div className="itemData">
                    <p className="name">
                        {item.name} {quantity > 1 && (
                            <span className='itemQty muted'>x{quantity}</span>
                        )}
                    </p>
                    <p className='itemPrice muted'>{formatCurrency(item.price)}</p>
                </div>
            </div>
            <div className="itemAction">
                <p>{formatCurrency(item.price * quantity)}</p>
                <button
                    className='cartRemove'
                    onClick={() => removeItem(id)}
                >
                    &times;
                </button>
            </div>
        </div>
    )
}

export default CartItem