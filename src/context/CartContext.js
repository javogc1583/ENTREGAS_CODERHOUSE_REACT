import { createContext, useState } from "react";

/* Contexto del carrito de compras */
export const CartContext = createContext({
    cart: [],
    totalQuantity: 0 
})

/* Lógica del carrito de compras */
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    const updateTotal = (quantity) => {
        //console.log("UpdateTotal: " + quantity)
        setTotalQuantity(quantity)
    }
    const getTotal = () => {
        return totalQuantity
    }
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])                                  
        }else{
            console.log("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {        
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, updateTotal, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}