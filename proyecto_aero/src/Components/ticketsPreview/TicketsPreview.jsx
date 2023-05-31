import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./ticketsP.scss"
// import { get } from "../../Services/GetFlights"
import maleta from "../../assest/maleta.png"
import iconLine from "../../assest/icon-line2.jpeg"

const TicketsPreview = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {
    const getInfoVuelo = JSON.parse(sessionStorage.getItem('idVuelo')) || {};
    const valorVuelo = getInfoVuelo[0].price;
    console.log(valorVuelo);
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
const [valorEquipajeS2, setValorEquipajeS2] = useState();
// Hook de estado para el clic en el equipaje sencillo 1
const [equipajeSencillo2, setEquipajeSencillo2] = useState('white');
const initialColorS2 = 'white';

const selectBaggageSencillo2=() =>{
  if (equipajeSencillo === initialColorS2) {
      setEquipajeSencillo2("rgb(161, 43, 136)");
      setValorEquipajeS2('17000')
  } else {
      setEquipajeSencillo(initialColorS2);
  }
}
//hock de estado para asignar el valor del equipaje de mano 
const [valorEquipajeM, setValorEquipajeM] = useState();
// Hook de estado para el clic en el equipaje de mano 1
const [equipajeDeMano, setEquipajeDeMano] = useState('white');
const initialColorM = 'white';
const selectBaggageDeMano=() =>{
  if (equipajeDeMano === initialColorM) {
    setEquipajeDeMano("rgb(161, 43, 136)");
    setValorEquipajeM('20000')
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
//hock de estado para asignar el valor del equipaje de 25 kg 
const [valorEquipaje25, setValorEquipaje25] = useState();
// Hook de estado para el clic en el equipaje de 25Kg 1
const [equipajeDe25, setEquipajeDe25] = useState('white');
const initialColor2 = 'white';
const selectBaggageDe25=() =>{
  if (equipajeDe25 === initialColor2) {
    setEquipajeDe25("rgb(161, 43, 136)");
    setValorEquipaje25('25000')
  } else {
    setEquipajeDe25(initialColor2);
  }
}
//hock de estado para asignar el valor del equipaje de 25 kg 
const [valorEquipaje252, setValorEquipaje252] = useState();
// Hook de estado para el clic en el equipaje de 25Kg 2
const [equipajeDe252, setEquipajeDe252] = useState('white');
const initialColor22 = 'white';
const selectBaggageDe252=() =>{
  if (equipajeDe252 === initialColor22) {
    setEquipajeDe252("rgb(161, 43, 136)");
    setEquipajeDe252("25000")
  } else {
    setEquipajeDe252(initialColor22);
  }
}

    // const [num1, setNum1] = useState(0);
    // const [num2, setNum2] = useState(0);
    // const [suma, setSuma] = useState(0);
  
    // useEffect(() => {
    //   const resultado = num1 + num2;
    //   setSuma(resultado);
    // }, [num1, num2]);
  
    // let sumaTotal = 0

    // getInfoVuelo.map((item, index) => {
    //     const valorEquipaje = // Cálculo del valor del equipaje
    //     const tarifaBase = item.price;
      
    //     const suma = valorEquipaje + tarifaBase;
    //     sumaTotal += suma; // Actualizar la suma total
   // valor equipaje de ida 
    const changeValor1 = (item) => {
        if (item === 'a'&& equipajeSencillo === initialColor ) {
            console.log(500)
            setValorEquipajeS(17000);
            setEquipajeSencillo("rgb(161, 43, 136)");
        }
        if (item === 'b'&& equipajeDeMano === initialColor ) {
            console.log(1000)
            setValorEquipajeS(20000);
            setEquipajeDeMano("rgb(161, 43, 136)")
        }
        if (item === 'c' && equipajeDe25=== initialColor ) {
            console.log(1900)
            setValorEquipajeS(25000);
            setEquipajeDe25("rgb(161, 43, 136)")
        }
    }

 // valor equipaje de regreso 
     const changeValor2 = (item) => {
        if (item === 'a'&& equipajeSencillo2 === initialColor ) {
            console.log(500)
            setValorEquipajeS2(17000);
            setEquipajeSencillo2("rgb(161, 43, 136)");
        }
        if (item === 'b'&& equipajeDeMano2 === initialColor ) {
            console.log(1000)
            setValorEquipajeS2(20000);
            setEquipajeDeMano2("rgb(161, 43, 136)")
        }
        if (item === 'c' && equipajeDe252 === initialColor ) {
            console.log(1900)
            setValorEquipajeS2(25000);
            setEquipajeDe252("rgb(161, 43, 136)")
        }
    }

    const  totalEquipaje = valorEquipajeS + valorEquipajeS2;
    const totalPrecioVuelo = totalEquipaje + valorVuelo;
 sessionStorage.setItem('precioTotalVuelo', JSON.stringify(totalPrecioVuelo));
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
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeSencillo}} onClick={() => { changeValor1('a') }}><img src={maleta} alt='icon' className='icon' /> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeDeMano }} onClick={() => { changeValor1('b') }}> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$20.000 COP</span></button>
                                        <button className='buttonBaggage' style={{ backgroundColor: equipajeDe25 }} onClick={() => { changeValor1('c') }}> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$25.000 COP</span></button>

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
                                            <button className='buttonBaggage' style={{ backgroundColor: equipajeSencillo2}} onClick={() => { changeValor2('a') }}><img src={maleta} alt='icon' className='icon' /> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                            <button className='buttonBaggage' style={{ backgroundColor: equipajeDeMano2 }} onClick={() => { changeValor2('b') }}> <img src={maleta} alt='icon' className='icon' />  Equipaje de mano <br /><span>$20.000 COP</span></button>
                                            <button className='buttonBaggage' style={{ backgroundColor: equipajeDe252 }} onClick={() => { changeValor2('c') }}> <img src={maleta} alt='icon' className='icon' />  Equipaje 25kg <br /><span>$25.000 COP</span></button>
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
                                        <span className='fecha'> {item.Departure_date} , {item.Departure_time} PM</span>

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
                                    <span>Tarifa Base {item.price}  </span> <br/>
                                    <span>Valor equipaje ida {valorEquipajeS}</span> <br/>
                                    <span>Valor equipaje regreso {valorEquipajeS2}</span> <br/>
                                    <span>Valor Total equipaje  {totalEquipaje} </span> <br/>
                                    <span>Dscto Promocional {item.Descuento_Pormocional} </span> <br/>
                                    <span>Tarifa Base con Dscto {item.Tarifa_Base_con_Dscto} </span> <br/>
                                    <span>IVA{item.iva} </span> <br/>
                                    <span className='totalTickets'>Total {totalPrecioVuelo}  </span> 
                                </div>
                                <h4>Servicios Adicionales</h4><br />
                                <div className="costo__vuelos">
                                    <span>Selecciona tu asiento </span> <br/>
                                    <span>IVA Servicios </span> <br/>
                                    <span><strong>Total </strong></span> <br/>
                                    
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