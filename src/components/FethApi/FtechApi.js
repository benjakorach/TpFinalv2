import React, { useState } from 'react'
import { getCoints } from '../helpers/getCoints'
import { cointGeckoAPI } from '../../data/endPoints'
import './ftechapi.css'
import { cart } from '../context/CartContent'

export const FtechApi = () => {

    const [cointList, setCointList] = useState([])
    const titles = ['#', '', 'Coin', 'Price', '24hs Change', 'Market Cap', 'Volume', 'Buy']

    try {
        const coints = getCoints(cointGeckoAPI)
        coints.then(newCoints => setCointList(newCoints))

    } catch (error) {
        console.log(error)
    }

    return (
        <div className="container">
            <table className='table table-dark  table-hover' >
                <thead>
                    <tr>
                        {titles.map((title, index) => <th key={index}>{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {cointList.map((coint, index) => (
                        <tr key={coint.id}>
                            <td>{index + 1}</td>
                            <td><img src={coint.image} alt="" width="25" className="img-fluid me-2" /></td>
                            <td>{coint.name}</td>
                            <td>${coint.price.toFixed(2)}</td>
                            <td className={coint.change < 0 ? "text-danger" : "text-success"}>{coint.change}%</td>
                            <td>${coint.mcap.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                            <td>${coint.volume.toLocaleString('en-US', { maximumFractionDigits: 2 })} </td>
                            <td onClick={() => addToCart(coint)}><button className='btn btn-light'>&#10084;</button></td>                    </tr>
                    ))}
                </tbody>



            </table>
        </div>

    )
}

function addToCart(coint) { /* agregar base de datos (products) */
    const index = cart.findIndex(item => item.id === coint.id)  /* para buscar mediante el index */
    if (index > -1) {                                    /* si el index es mayor a -1 */
        cart[index].count++
    } else {                                          
        cart.push({ ...coint, count: 1 })
    }
    console.log(cart)
}

















