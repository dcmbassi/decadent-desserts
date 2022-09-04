import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"
import { products } from "../data/products"

const Products = () => {
    const [search, setSearch] = useState('')
    const [displayedProducts, setDisplayedProducts] = useState(products)

    useEffect(() => {
        if (!!search.length) {
            setDisplayedProducts(products.filter(p => p.name.toLowerCase().includes(search)))
        } else setDisplayedProducts(products)
    }, [search])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <>
            <h2>Products</h2>
            <SearchBar handleSearch={handleSearch} />
            <div className="productGrid">
                {displayedProducts.map(product => (
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