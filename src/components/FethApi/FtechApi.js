import React, { useState } from 'react'
import { getCoints } from '../helpers/getCoints'
import { cointGeckoAPI } from '../../data/endPoints'
import './ftechapi.css'


export const FtechApi = () => {

    const [cointList, setCointList] = useState([])
    const titles = ['#', '', 'Coin', 'Price', '24hs Change', 'Market Cap', 'Volume']
    
    try {
        const coints = getCoints(cointGeckoAPI)
        coints.then( newCoints => setCointList(newCoints) )

    } catch (error) {
        console.log(error) 
    }

    return (
        <div className="container">
        <table className='table table-dark  table-hover' >
            <thead>
                <tr>
                    {titles.map( (title, index) => <th key={index}>{title}</th> )}
                </tr>
            </thead>
            <tbody>
                {cointList.map( (coint, index) => (
                    <tr key={coint.id}>
                        <td>{index + 1}</td>
                        <td><img src={coint.image} alt="" width="25" className="img-fluid me-2" /></td>
                        <td>{coint.name}</td>
                        <td>${coint.price}</td>
                        <td className={coint.change < 0 ? "text-danger":"text-success"}>{coint.change}%</td>
                        <td>${coint.mcap.toLocaleString('en-US', {maximumFractionDigits:2})}</td>
                        <td>${coint.volume.toLocaleString('en-US', {maximumFractionDigits:2})} </td>
                    </tr>
                ))}
            </tbody>
            
            

        </table>
        </div>
        
    )
}

        





        
