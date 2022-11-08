/* import React, { createContext, useEffect, useState } from "react";
import { cart } from "./CartContent";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(()=>{

        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts');
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error) {
            return [];
        }
        
    });

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }
 */