import React from "react";
import { cointGeckoAPI } from "../../data/endPoints";

import { cart } from "../context/CartContent";

const Cart = () => {
    return (
        
        <div className="vh-100" >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2">Shopping Cart </span><span className="h4">({cart.length}) items in your cart </span></p>



                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2"></p>
                                        <img src={cart[0].image} alt="" width="50" className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="small text-muted mb-4 pb-2">Coin</p>
                                        <p className="h5">{cart[0].name}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Price</p>
                                        <p className="h5">${cart[0].price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                                        <p className="h5">1</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Subtotal:</p>
                                        <p className="h5">${cart[0].price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2"></p>
                                        <img src={cart[1].image} alt="" width="50" className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="small text-muted mb-4 pb-2">Coin</p>
                                        <p className="h5">{cart[1].name}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Price</p>
                                        <p className="h5">${cart[1].price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                                        <p className="h5">1</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Subtotal:</p>
                                        <p className="h5">${cart[1].price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2"></p>
                                        <img src={cart[2].image} alt="" width="50" className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="small text-muted mb-4 pb-2">Coin</p>
                                        <p className="h5">{cart[2].name}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Price</p>
                                        <p className="h5">${cart[2].price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                                        <p className="h5"> </p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Subtotal:</p>
                                        <p className="h5">${cart[2].price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2"></p>
                                        <img src={cart[3].image} alt="" width="50" className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="small text-muted mb-4 pb-2">Coin</p>
                                        <p className="h5">{cart[3].name}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Price</p>
                                        <p className="h5">${cart[3].price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                                        <p className="h5"> </p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Subtotal:</p>
                                        <p className="h5">${cart[3].price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2"></p>
                                        <img src={cart[4].image} alt="" width="50" className="img-fluid" />
                                    </div>
                                    <div className="col-4">
                                        <p className="small text-muted mb-4 pb-2">Coin</p>
                                        <p className="h5">{cart[4].name}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Price</p>
                                        <p className="h5">${cart[4].price}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Quantity</p>
                                        <p className="h5"> </p>
                                    </div>
                                    <div className="col-2">
                                        <p className="small text-muted mb-4 pb-2">Subtotal:</p>
                                        <p className="h5">${cart[4].price}</p>
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