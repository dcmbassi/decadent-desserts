import { Product } from "../data/products"

type CardProps = {
    product: Product
}

const ProductCard = ({ product }: CardProps) => {
    return (
        <div className="productCard">
            <div className="cardInfo">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
            </div>
            <div className="cardActions">
                <div className="cartManip">
                    <button className="cartQuantity">-</button>
                    <div>2</div>
                    <button className="cartQuantity">+</button>
                </div>
                <div className="cardMainAction">
                    <button className="cardMainAction">Ajouter au panier</button>
                    <button className="cardMainAction">Retirer du panier</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard