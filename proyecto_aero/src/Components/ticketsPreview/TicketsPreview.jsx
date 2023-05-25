import React from 'react'
import { useEffect, useState } from "react";
import "./ticketsP.scss"
import { useNavigate } from 'react-router-dom'
import { get } from "../../Services/GetFlights"
import maleta from "../../assest/maleta.png"

const TicketsPreview = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {

    const [infoFlight, handleFlight] = useState([]);

    const getFlight = async () => {
        const getInfoFlight = await get('endpointExample');
        handleFlight(getInfoFlight);
        console.log(getInfoFlight);
    }


    useEffect(() => {
        getFlight();
    }, [])

    const navigate = useNavigate();
    const returnHome = () => {
        navigate("/")
    }


    return (
        <>

            <section className='section_tickets'>

                {
                    infoFlight.map((item, index) => (

                        <>

                            <section className='seleccion_Vuelos'>
                                <div className='show_Vuelos'>
                                    <div className='title__Vuelos'>
                                        <h2>Vuelo de Salida</h2>
                                        <span>{item.Departure_date} <br /> {item.Origin_city} a {item.Destination_city}</span>
                                    </div>
                                    <button onClick={returnHome}>Cambiar Vuelo</button>
                                </div>

                                <div className='flights'>
                                    <span className='select'> Selección de Horario y Equipajes </span>
                                    <div className='equipaje'>

                                        <article>
                                            <span className="hora">{item.Departure_time} PM - {item.Arrival_time} PM</span>
                                        </article>



                                        <button><img src={maleta} alt='icon' className='icon' /> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                        <button> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$20.000 COP</span></button>
                                        <button> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$25.000 COP</span></button>

                                    </div>


                                </div>

                                <article className='space'>
                                    <div className="show_Vuelos">
                                        <div className="title__vuelos">
                                            <h2>Vuelo de regreso</h2>
                                            <span>{item.Departure_date} <br /> {item.Origin_city} a {item.Destination_city}</span>

                                        </div>
                                        <button onClick={returnHome}>Cambiar vuelo</button>
                                    </div>
                                    <div >
                                        <span className="select">Seleccion de horarios y equipajes </span>
                                        <div className="equipaje">
                                            <article>
                                                <span className="hora">{item.Departure_time} PM - {item.Arrival_time} PM</span>
                                            </article>
                                            <button> <img src={maleta} alt='icon' className='icon' />  1 objeto personal <br /><span>$20.000 COP</span></button>
                                            <button> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$25.000 COP</span></button>
                                            <button> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$30.000 COP</span></button>
                                        </div>
                                    </div>
                                </article>
                            </section>


                            <aside className="my__reversation">
                                <h3>Tu reservación</h3><br />
                                <div className="reservation">
                                    <h4>Vuelo de salida</h4><br />

                                    <div className='prueba'>
                                        <span>{item.Origin_city} <br /> {item.Arrival_time} </span>
                                        <span>__</span>
                                        <span>{item.Destination_city} <br /> {item.Departure_time} </span>
                                    </div>

                                    {/* 
                                    <span>{item.Origin_city} __ {item.Destination_city}</span><br />
                                    
                                    <span>{item.Arrival_time}</span><br />
                                    <span>{item.Departure_time}</span><br />

                                    <h4>Vuelo de regreso</h4><br />
                                    <span>{item.Destination_city} __ {item.origen}</span><br />
                                    <span>{item.Arrival_time}</span><br />
                                    <span>{item.Arrival_date}</span> */}
                                </div>
                                <h4>Costo de vuelo</h4><br />
                                <div className="costo__vuelos">
                                    <span>Tarifa Base {item.Tarifa_Base_con_Dscto} </span> <br/>
                                    <span>Descuento Promocional {item.Descuento_Pormocional} </span> <br/>
                                    <span>Tarifa Base con Descueento {item.Tarifa_Base_con_Dscto} </span> <br/>
                                    <span>IVA{item.iva} </span> <br/>
                                    <span className='totalTickets'>Total {item.Price} </span> 
                                </div>
                            </aside>


                            {/* <option key={`origin${item.id}`}>
                                {item.Origin_city}
                            </option> */}

                        </>
                    ))}

            </section>
        </>
    )
}




export default TicketsPreview