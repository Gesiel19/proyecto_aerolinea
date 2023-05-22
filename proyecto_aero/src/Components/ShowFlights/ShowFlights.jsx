import React from 'react'
import { get} from "../../Services/GetFlights"
import { useEffect, useState } from "react"


export const ShowFlights = () => {
   
    const [infoFlight, handleFlight] = useState([]);

    const getFlights = async() => {
        const getInfoFlight = await get('flightInformation');
        handleFlight(getInfoFlight);
        console.log(getInfoFlight);
    }
    

    useEffect(() => {        
        getFlights();
    }, [])

    return (
    <div>
        ShowFlights
        {
        infoFlight.map(infoFlight => <div key={infoFlight.id}>{infoFlight.Origin_city}</div>)
        }
        <span>Origen</span>
        {
        infoFlight.map(infoFlight => <div key={infoFlight.id}>{infoFlight.Destination_city}</div>)
        }
        <span>Destino</span>

    </div>
  )
}

