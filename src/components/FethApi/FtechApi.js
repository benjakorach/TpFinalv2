import React, { useState } from 'react'
import { getCoints } from '../helpers/getCoints'
import { cointGeckoAPI } from '../../data/endPoints'


export const FtechApi = () => {

    const [cointList, setCointList] = useState([])
    const titles = ['#', '', 'Coin', 'Price', '24hs Change', 'Volume']
    
    try {
        const coints = getCoints(cointGeckoAPI)
        coints.then( newCoints => setCointList(newCoints) )

    } catch (error) {
        console.log(error) 
    }

    return (
        <table className='table table-dark mt-4 table-hover' >
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
                        <td>${coint.volume}</td>
                    </tr>
                ))}
            </tbody>
            

        </table>
    )
}

        





        
