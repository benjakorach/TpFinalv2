import React from "react";
import { cart } from "../context/CartContent";

function save(cart) {
    var cartArray = getStoreArray("cart");
    console.log(cartArray);
    cartArray.push(cart);
    localStorage.setItem("carts", JSON.stringify(cartArray));
}


function getStoreArray(key) {
    var cartArray = localStorage.getItem(key)
    if (cartArray === null || cartArray === "") {	
        cartArray = new Array();
    } else {
        cartArray = JSON.parse(cartArray);
        console.log(cartArray);
    }


    return cartArray
}	



const Cart = () => {
    return (
        <div className="vh-100">
            <div className="container h-200">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2">Shopping Cart </span><span className="h4">({cart.length}) items in your cart </span></p>
                        {cart.map((item) => (
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <p className="small text-muted mb-4 pb-2"></p>
                                            <img src={item.image} alt="" width="50" className="img-fluid" />
                                        </div>
                                        <div className="col-4">
                                            <p className="small text-muted mb-4 pb-2">Coin</p>
                                            <p className="h5">{item.name}</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="small text-muted mb-4 pb-2">Items</p>
                                            <p className="h5">{item.count}</p>
                                        </div>
                                        <div className="col-4">
                                            <p className="small text-muted mb-4 pb-2">Price</p>
                                            <p className="h5">${item.price * item.count}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="h5">Total</p>
                                        </div>
                                        <div className="col-12">                                            
                                            <p className="h5">${cart.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)}</p>
                                            <div>
                                                <button onClick={() => save(cart)}>Save</button>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            )
}



            export default Cart;