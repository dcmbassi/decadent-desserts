import { useCart } from "../context/CartContext"
import { Product } from "../data/products"
import { formatCurrency } from "../utils/formatCurrency"

type CardProps = {
    product: Product
}

const ProductCard = ({ product }: CardProps) => {
    const {getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem} = useCart()
    const quantity = getItemQuantity(product.id)
    return (
        <div className="productCard">
            <div className="cardInfo">
                <h4>{product.name}</h4>
                <p>{formatCurrency(product.price)}</p>
            </div>
            <div className="cardActions">
                {!!quantity && <div className="cartManip">
                    <button className="cartQuantity" onClick={() => decreaseItemQuantity(product.id)}>-</button>
                    <div>{quantity}</div>
                    <button className="cartQuantity" onClick={() => increaseItemQuantity(product.id)}>+</button>
                </div>}
                <div className="cardMainAction">
                    {!!!quantity && <button className="cardMainAction" onClick={() => increaseItemQuantity(product.id)}>Ajouter au panier</button>}
                    {!!quantity && <button className="cardMainAction" onClick={() => removeItem(product.id)}>Retirer du panier</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard