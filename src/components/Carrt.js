/*  import React, {useContext,useState,useEffect} from 'react'
import { CartContent } from '../components/context/CartContent'
import { addToCart} from "../components/FethApi/FtechApi"

export const Carrt = () => {

    const [cart, setCart] = useState(CartContent.cart)
    const [total, setTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    
    useEffect(() => {
        setCart(CartContent.cart)
        setTotalItems(CartContent.cart.length)
        setTotal(CartContent.cart.reduce((a,b) => a + b.price, 0))
    }
    , [CartContent.cart])

    return (
        <div className="container">
            <h1>Cart</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map( (coint, index) => (
                        <tr key={coint.id}>
                            <td>{index + 1}</td>
                            <td><img src={coint.image} alt="" width="25" className="img-fluid me-2" /></td>
                            <td>{coint.name}</td>
                            <td>${coint.price}</td>
                            <td onClick={() => removeFromCart(coint)}><button className='btn btn-light'>&#10084;</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row">
                <div className="col-6">
                    <h3>Total Items: {totalItems}</h3>
                </div>
                <div className="col-6">
                    <h3>Total: ${total}</h3>
                </div>
            </div>
        </div>
    )

}

function removeFromCart(coint) {
    CartContent.remove(coint)
}
  */