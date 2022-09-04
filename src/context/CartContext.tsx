import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
    children: ReactNode
}

type CartContext = {
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeItem: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}

const CartContex = createContext({} as CartContext)

export const useCart = () => useContext(CartContex)

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getItemQuantity = (id: number) => cartItems.find(i => i.id === id)?.quantity || 0

    const increaseItemQuantity = (id: number) => {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id) == null) {
                return [...prevItems, { id, quantity: 1 }]
            } else {
                return prevItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity + 1 }
                    else return item
                })
            }
        })
    }

    const decreaseItemQuantity = (id: number) => {
        setCartItems(prevItems => {
            if (prevItems.find(item => item.id === id)?.quantity == 1) {
                return prevItems.filter(item => item.id !== id)
            } else {
                return prevItems.map(item => {
                    if (item.id === id) return { ...item, quantity: item.quantity - 1 }
                    else return item
                })
            }
        })
    }

    const removeItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    const value = {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem
    }
    return (
        <CartContex.Provider value={value}>
            {children}
        </CartContex.Provider>
    )
}
