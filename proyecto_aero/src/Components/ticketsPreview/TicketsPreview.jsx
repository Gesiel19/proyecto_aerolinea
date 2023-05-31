import React from 'react'
import { useState } from "react";
import "./ticketsP.scss"
import { useNavigate } from 'react-router-dom'
// import { get } from "../../Services/GetFlights"
import maleta from "../../assest/maleta.png"
import iconLine from "../../assest/icon-line2.jpeg"

const TicketsPreview = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {
    const getInfoVuelo = JSON.parse(sessionStorage.getItem('idVuelo'));
    const [infoFlight, handleFlight] = useState([]);

    // const getFlight = async (id) => {
    //     const getInfoFlight = await get('endpointExample');
    //     handleFlight(getInfoFlight);
    //     console.log(getInfoFlight);
    // }


    // useEffect(() => {
    //     getFlight();
    // }, [])

    const navigate = useNavigate();
    const returnHome = () => {
        sessionStorage.clear()
        navigate("/")
      
    }


    const goSeatSelect = () => {
        navigate ("/seats")
    }

    const baggage  = [
        {
        id: "000",
        name: "1 objeto personal",
        pricetoShow: "$17.000 COP", 
        realPrice: "17000",
        image: maleta
        },
        {
        id: "001",
        name: "equipaje de mano",
        pricetoShow: "$20.000 COP",
        realPrice: "20000",
        image: maleta
        },
        {
        id: "002",
        name: "equipaje de 25kg",
        pricetoShow: "$25.000 COP",
        realPrice: "25000",
        image: maleta
        },
    ]
//hock de estado para asignar el valor del equipaje sencillo 
const [valorEquipajeS, setValorEquipajeS] = useState();
  // Hook de estado para el clic en el equipaje sencillo 1
  const [equipajeSencillo, setEquipajeSencillo] = useState('white');
  const initialColor = 'white';

const selectBaggageSencillo=() =>{
    if (equipajeSencillo === initialColor) {
        setEquipajeSencillo("rgb(161, 43, 136)");
        setValorEquipajeS('17000')
    } else {
        setEquipajeSencillo(initialColor);
    }
}




//hock de estado para asignar el valor del equipaje sencillo 
// const [valorEquipajeS, setValorEquipajeS] = useState();
// // Hook de estado para el clic en el equipaje sencillo 2
// const [equipajeSencillo2, setEquipajeSencillo2] = useState('white');
// const initialColorS2 = 'white';
// const selectBaggageSencillo2=() =>{
//   if (equipajeSencillo === initialColorS2) {
//     setEquipajeSencillo2("rgb(161, 43, 136)");
//   } else {
//     setEquipajeSencillo2(initialColorS2);
//   }
// }

// Hook de estado para el clic en el equipaje de mano 1
const [equipajeDeMano, setEquipajeDeMano] = useState('white');
const initialColorM = 'white';
const selectBaggageDeMano=() =>{
  if (equipajeDeMano === initialColorM) {
    setEquipajeDeMano("rgb(161, 43, 136)");
    // setSpanContent('Nuevo contenido para el span')
  } else {
      setEquipajeDeMano(initialColorM);
  }
}
// Hook de estado para el clic en el equipaje de mano 2
const [equipajeDeMano2, setEquipajeDeMano2] = useState('white');
const initialColorM2 = 'white';
const selectBaggageDeMano2=() =>{
  if (equipajeDeMano2 === initialColorM2) {
    setEquipajeDeMano2("rgb(161, 43, 136)");
  } else {
      setEquipajeDeMano2(initialColorM);
  }
}
// Hook de estado para el clic en el equipaje de 25Kg 1
const [equipajeDe25, setEquipajeDe25] = useState('white');
const initialColor2 = 'white';
const selectBaggageDe25=() =>{
  if (equipajeDe25 === initialColor2) {
    setEquipajeDe25("rgb(161, 43, 136)");
  } else {
    setEquipajeDe25(initialColor2);
  }
}
// Hook de estado para el clic en el equipaje de 25Kg 2
const [equipajeDe252, setEquipajeDe252] = useState('white');
const initialColor22 = 'white';
const selectBaggageDe252=() =>{
  if (equipajeDe252 === initialColor22) {
    setEquipajeDe252("rgb(161, 43, 136)");
  } else {
    setEquipajeDe252(initialColor22);
  }
}




    return (
        <>

            <section className='section_tickets'>

                {
                    getInfoVuelo.map((item, index) => (

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

                                        <article className='bloqueHora'>
                                            <span className="hora">{item.Departure_time} PM •-• {item.Arrival_time} PM</span>
                                        </article>


                                        {/* {  baggage.map((item) => <button key={item.id} className='buttonBaggage' style={{ backgroundColor: equipajeSencillo}} onClick={selectBaggageSencillo} > <img src={item.image} alt='icon' className='icon' /> {item.name} <br /><span>{item.pricetoShow}</span>
                                        </button>)} */}
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeSencillo}} onClick={selectBaggageSencillo}><img src={maleta} alt='icon' className='icon' /> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeDeMano }} onClick={ selectBaggageDeMano}> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$20.000 COP</span></button>
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeDe25 }} onClick={ selectBaggageDe25}> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$25.000 COP</span></button>

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
                                                <span className="hora">{item.Departure_time} PM •-• {item.Arrival_time} PM</span>
                                            </article>
                                            {/* <button className='buttonBaggage' style={{ backgroundColor: equipajeSencillo2}} onClick={selectBaggageSencillo2}><img src={maleta} alt='icon' className='icon' /> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                            <button className='buttonBaggage' style={{ backgroundColor: equipajeDeMano2 }} onClick={ selectBaggageDeMano2}> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$20.000 COP</span></button> */}
                                            <button className='buttonBaggage' style={{ backgroundColor: equipajeDe252 }} onClick={ selectBaggageDe252}> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$25.000 COP</span></button>
                                        {/* {  baggage.map((item) => <button key={item.id} className='buttonBaggage' style={{ backgroundColor: equipajeDeMano }} onClick={ selectBaggageDeMano} > <img src={item.image} alt='icon' className='icon' /> {item.name} <br /><span>{item.pricetoShow}</span>
                                        </button>)} */}
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
                                    <span>Tarifa Base {item.price} </span> <br/>
                                    <span>Valor equipaje {valorEquipajeS} </span> <br/>
                                    <span>Descuento Promocional {item.Descuento_Pormocional} </span> <br/>
                                    <span>Tarifa Base con Descueento {item.Tarifa_Base_con_Dscto} </span> <br/>
                                    <span>IVA{item.iva} </span> <br/>
                                    <span className='totalTickets'>Total {item.Price} </span> 
                                </div>
                                <h4>Costo de vuelo</h4><br />
                                <div className="costo__vuelos">
                                    <span>Selecciona tu asiento </span> <br/>
                                    <span>IVA Servicios </span> <br/>
                                    <span>Total </span> <br/>
                                    
                                </div>
                                <button className='buttonSeat'  onClick={goSeatSelect}>Seleccionar Asientos</button>
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