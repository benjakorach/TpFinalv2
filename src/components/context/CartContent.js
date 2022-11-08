
/* CART CONTENT FUNCIONA, CARGA EN EL ARRAY LO QUE COMPRAS */

import React from "react"


export var cart = {
    cart: [],

    add: function(coint) {
        this.cart.push(coint)
    },
    remove: function(coint) {
        this.cart = this.cart.filter( c => c !== coint )
    },
    clear: function() {
        this.cart = []
    }
}
