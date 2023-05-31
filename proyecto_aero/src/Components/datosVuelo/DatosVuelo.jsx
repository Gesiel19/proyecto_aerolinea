import React from 'react'
import SeatSelection from '../SeatSelection/SeatSelection'
import "./DatosVuelo.scss"
import { useNavigate } from 'react-router-dom';





const DatosVuelo = () => {
    const getInfoVuelo = JSON.parse(sessionStorage.getItem('idVuelo'));

    const navigate = useNavigate();
    const returnHome = () => {
        sessionStorage.clear()
        navigate("/")
      
    }
    const getPrecioTotalVuelo = JSON.parse(sessionStorage.getItem('precioTotalVuelo'))
    return (
        <div className='nolose'>

            <section className='asientos'>
            <div className='ahoramenos'>
            {
                    getInfoVuelo.map((item, index) => (
                <div className='title__Vuelos'>
                    <h2>Vuelo de Salida</h2>
                    <span>{item.Departure_date} <br /> {item.Origin_city} a {item.Destination_city}</span>
                </div>
                    ))}

            <button onClick={returnHome}>Cambiar vuelo</button>
            </div>
                <SeatSelection />


            </section>

            <section className='infoVuelo'>

                {
                    getInfoVuelo.map((item, index) => (

                        <aside className="my__reversation">
                            <h3>Tu reservación</h3><br />
                            <div className="reservation">
                                <h4>Vuelo de salida</h4><br />

                                <div className='prueba'>
                                    <span>{item.Origin_city} <br /> {item.Arrival_time} </span>
                                    <span>__</span>
                                    <span>{item.Destination_city} <br /> {item.Departure_time} </span>
                                </div>
                            </div>
                            <h4>Costo de vuelo</h4><br />
                            <div className="costo__vuelos">
                                <span>Tarifa Base {getPrecioTotalVuelo} </span> <br />
                                <span>Descuento Promocional {item.Descuento_Pormocional} </span> <br />
                                <span>Tarifa Base con Descueento {item.Tarifa_Base_con_Dscto} </span> <br />
                                <span>IVA{item.iva} </span> <br />
                                <span className='totalTickets'>Total {item.Price} </span>
                            </div>
                            <button className='buttonSeat' >Pagar con Paypal</button>
                            <h4>Servicios Disponibles</h4> <br/>
                            <div>
                                <span>Selecciona tu asiento</span>
                            </div>
                        </aside>

                    ))}
            </section>




        </div>
    )
}

export default DatosVuelo