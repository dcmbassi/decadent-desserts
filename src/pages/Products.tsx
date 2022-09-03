import { products } from "../data/products"

const Products = () => {

    return (
        <>
            <h2>Products</h2>
            <div className="productGrid">
                {products.map(product => (
                    <div className="productCard" key={product.id}>
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Products