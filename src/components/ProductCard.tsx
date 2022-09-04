import { Product } from "../data/products"

type CardProps = {
    product: Product
}

const ProductCard = ({product}: CardProps) => {
    return (
        <div className="productCard">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
        </div>
    )
}

export default ProductCard