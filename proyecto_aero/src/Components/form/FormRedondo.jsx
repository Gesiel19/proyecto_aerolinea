import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import planeImage from "../../assest/bg-plane.jpeg"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./FormStyle.scss";
import { get } from "../../Services/GetFlights";
// import Back  from "../Common/back/Back";
import Swal from "sweetalert2";
import axios from 'axios';
import { SimpleGrid, Heading, Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
    Stack,
    useDisclosure

} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


import {
    TbPlaneTilt
} from "react-icons/tb"

// Validación de los campos del form 

const showPeople = [
    {
        name: "Adulto",
        price: "100%",
        number: 0
    },
    {
        name: "Niños",
        price: "50%",
        number: 0
    },
    {
        name: "Bebes",
        price: "20%",
        number: 0
    }
]
// const selectPeople = () => {
//     const { people, setPeople } = useState(passagers);

//     const handleMinus = (index) => {
//         const peopleCopy = [...people]
//         peopleCopy[index].number--;
//         setPeople([...peopleCopy]);
//     }
// const handlePluss = (index) => {
//     if ()
// }
// }
const validationSchema = Yup.object().shape({
    origen: Yup.string()
        .required('El origen es obligatorio'),
    destino: Yup.string(),
    salida: Yup.date()
        .required('La Salida es obligatoria'),
    regreso: Yup.date(),
    pasajeros: Yup.number(),
});

// COMPONENTE FORM 
const FormRedondo = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {

    // const [infoCities, handleCities] = useState([]);

    // const getCities = async () => {
    //     const getInfoCities = await get('countriesInfo');
    //     handleCities(getInfoCities);
    //     console.log(getInfoCities);
    // }


    // useEffect(() => {
    //     getCities();
    // }, [])

    // const navigateR = useNavigate();
    // const goTickets = () => {
    //     navigateR("tickets")
    // }


    const initialValues = {
        origen: '',
        destino: '',
        salida: '',
        regreso: '',
        pasajeros: 0,
    };
    const navigate = useNavigate()
    // Hook de estado para mostrar las ciudades 
    const [infoCities, handleCities] = useState([]);
    const getCities = async () => {
        const getInfoCities = await get('countriesInfo');
        handleCities(getInfoCities);
        console.log(getInfoCities);
    }
    useEffect(() => {
        getCities();
    }, [])

    // Hook de navegación para direccionar a los detalles del vuelo 
    const navigateR = useNavigate();
    const goTickets = () => {
        navigateR("tickets")
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {

            var inputReturn = document.getElementById("inputR");
            // Verifica si el elemento está deshabilitado
            if (inputReturn.disabled) {
                values.regreso = '';
                // El elemento está deshabilitado
                console.log("El elemento está deshabilitado");
            } else {

                // El elemento no está deshabilitado
                console.log("El elemento no está deshabilitado");
            }

            console.log("values", values);
            sessionStorage.setItem('infoVuelos', JSON.stringify(values));

            handleVuelo(values);
        },
        enableReinitialize: true
    })
    // Hook de estado para el vuelo sencillo y redondo 
    const [tipoDeVuelo, setTipoDeVuelo] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const selectVueloSencillo = () => {
        const newColor = "rgb(161, 43, 136)";
        setBgColor(newColor);
        setTipoDeVuelo(true)
    }
    const selectVueloRedondo = () => {
        setTipoDeVuelo(false)
    }
    // Función que compara la información del formulario con la de la data
    async function compararInformacion() {
        try {
            const response = await axios.get('http://localhost:3000/flightInformation');
            const data = response.data;
            console.log(data);

            const storedFormValues = JSON.parse(sessionStorage.getItem('infoVuelos'));
            console.log(storedFormValues);
            if (
                storedFormValues.origen !== "" &&
                storedFormValues.destino !== "" &&
                storedFormValues.salida !== "" 

            ) {
                if (storedFormValues) {
                    const resultado = data.filter(item => {
                        return (
                            item.Origin_country === storedFormValues.origen &&
                            item.Destination_country === storedFormValues.destino &&
                            item.Departure_date === storedFormValues.salida &&
                            item.Arrival_date === storedFormValues.regreso
                        );
                    });

                    if (resultado.length) {
                        console.log(resultado);
                        console.log('La información coincide');
                        Swal.fire(
                            'excelente',
                            'Vuelo encontrado!',
                            'success'
                        )
                        sessionStorage.setItem('idVuelo', JSON.stringify(resultado));
                        navigate('/tickets')

                    } else {
                        console.log('La información no coincide');
                        sessionStorage.clear()
                        Swal.fire(
                            'upps',
                            'No se encontraron vuelos!',
                            'error'
                        )
                        // form.reset();
                    }
                }

            } else {
                Swal.fire(
                    'upps',
                    'llene todos los datos porfavor',
                    'error'
                )
                console.log("llene los datos porfavor");
            }

        } catch (error) {
            console.error('Error al cargar el archivo JSON:', error);

        }
    }
    // compararInformacion();




    // const filterFligth = async (values) => {

    //     const vuelosFiltrados = await get("flightInformation")

    //     const getSession = JSON.parse(sessionStorage.getItem('infoVuelos'));
    //     console.log(getSession);


    //     if (getSession.length) {

    //             const resultado = vuelosFiltrados.some(item => {

    //                 return item.Origin_country === getSession.origen;
    //             });


    //         console.log(resultado);

    // if (resultado === ) {

    // }



    // navigate('/vuelos')
    //     } else {
    //         Swal.fire(
    //             'upps',
    //             'No se encontraron vuelos!',
    //             'error'
    //           )

    //     }
    // }

    // filterFligth();



    // const handleSubmit = () => {
    //     // e.preventDefault();
    //     console.log(initialValues);
    //     {
    //         console.log("se puede continuar");
    //     }
    // // };
    // // handleSubmit();
    //     const [isModalOpen, setIsModalOpen] = useState(false);
      
    //     const openModal = () => {
    //         setIsModalOpen(true);

    //     };
      
    //     // const closeModal = () => {
    //     //   setIsModalOpen(false);
    //     // };
    return (
    <div className="mainHome">
    <section className="mainHome__containerForm">
        <figure>
            <img  className="planeImg" src={planeImage} alt="plane" />
            </figure>
                <form onSubmit={formik.handleSubmit} className="form">
                    <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={10}>
                        <FormControl >
                            <legend> Busca un nuevo destino y comienza la aventura. </legend>
                        </FormControl>
                        {/* <FormControl w="25%" > */}
                        <FormLabel className="form__label" >Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
                        <Stack className="form__selectVuelo" direction='row' spacing={7} w="50%" >
                            <span onClick={selectVueloSencillo}>Viaje sencillo </span>
                            <span onClick={selectVueloRedondo}>Viaje redondo</span>
                        </Stack>
                        <Stack direction='row' spacing={4} w="90%" className="form__selectCountry">
                            <select value={formik.values.origen} onChange={formik.handleChange} name="origen" className="form__selectOrigin">
                                <option > Origen </option>
                                {infoCities.length &&
                                    infoCities.map((item) => (
                                        <option key={`origin${item.id}`} value={item.name}>
                                            {item.country}
                                        </option>
                                    ))}
                            </select>
                            {/* {formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>} */}
                            <FormErrorMessage>{formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>}</FormErrorMessage>
                            {/* </FormControl> */}


                            {/* <FormControl w="25%"> */}

                            <select value={formik.values.destino} onChange={formik.handleChange} name="destino" className="form__selectDestination">
                                <option> Selecciona un destino </option>
                                {/* <FormErrorMessage>{formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}</FormErrorMessage> */}
                                {infoCities.length &&
                                    infoCities.map((item) => (
                                        <option key={`destino${item.id}`} value={item.name}>
                                            {item.country}
                                        </option>
                                    ))}

                            </select>
                            {formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}
                        </Stack>

                        <Stack direction='row' spacing={4} w="85%" className="form__inputsDate">
                            <Input type="date" className="form__inputSalida" placeholder="Salida" value={formik.values.salida} onChange={formik.handleChange} name="salida" />
                            {/* {formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>} */}
                            {/* <FormErrorMessage>{formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>}</FormErrorMessage> */}
                            <Input type="date" className="form__inputRegreso" value={tipoDeVuelo ? '' : formik.values.regreso} onChange={formik.handleChange} disabled={tipoDeVuelo} placeholder="Regreso" name="regreso" id="inputR" />

                            <FormErrorMessage>{formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>}</FormErrorMessage>

                            {/* </FormControl> */}
                        </Stack>
                        {/* {formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>} */}
                        <Stack direction='row' spacing={4} w="90%" className="form__selectPassengers">
                            {/* <span onClick={openModal}> hola </span>
                            {isModalOpen && <Back />} */}
                            <select value={formik.values.pasajeros} onChange={formik.handleChange} w="40%" name="pasajeros">
                                <option value="." > Pasajeros </option>
                                <option value="1"> 1 </option>
                                <option value="2"> 2 </option>
                                <option value="3"> 3 </option>
                            </select>
                            {/* <div> */}
                            {/* <h5> Adultos </h5>
                                <section></section>
                            </div>
                            <div>
                                <h5> Niños </h5>
                                <section></section>
                            </div>
                            <div>
                                <h5> Bebes </h5>
                                <section></section> */}
                            {/* {
                                    people.length && (people.map((item, index) => (
                                        <div key={index}>
                                            <h5> {item.name} </h5>
                                            <section>
                                                <span> {`${item.price.toLocaleString()}`}</span>
                                                <button> - </button>
                                                <span> {item.number}</span>
                                                <button> + </button>
                                            </section>
                                        </div>
                                    )))
                                } */}
                            {formik.touched.pasajeros && formik.errors.pasajeros && <div>{formik.errors.pasajeros}</div>}
                            {/* <FormErrorMessage>{formik.touched.pasajeros&& formik.errors.pasajeros&& <div>{formik.errors.pasajeros}</div>}</FormErrorMessage> */}
                            {/* </div>   */}
                            <Input placeholder="Tienes un código de promoción" w="60%" />
                        </Stack>
                        <Button className="form__button" type="submit" disabled={formik.isSubmitting} onClick={compararInformacion} leftIcon={<TbPlaneTilt />} colorScheme='teal' variant='outline' >
                            <figure>
                                <img>
                                </img>
                            </figure>
                            <span > Buscar vuelo
                            </span>
                        </Button>
                    </Flex>
                </form>
            </section>
            <section className="mainHome__pay" w="90%">
                <h2> Pago seguro </h2>
                <Stack className="mainHome__pay__container" w="95%"display="flex" direction='row'>
                    <div className="mainHome__pay__container__cards">
                        <span>Tarjeta de credito, tarjeta de debito y pago electrónico</span>
                        <Stack className="container__cards" direction='row' spacing={4} w="50%">
                        <img className="card_amexcard" src="https://cms.volaris.com/globalassets/1nextgen/payments/amex.svg" alt="american express card" />
                            <img className="card_paypal" src=" https://cms.volaris.com/globalassets/1nextgen/payments/paypal.svg" alt="paypal card" />
                            <img className="card_invex" src=" https://cms.volaris.com/globalassets/1nextgen/payments/invex.svg" alt="invez card" />
                            <img className="card_mastercard" src="https://cms.volaris.com/globalassets/1nextgen/payments/mastercard.svg" alt="master card card" />
                            <img className="card_visa" src="https://cms.volaris.com/globalassets/1nextgen/payments/visa.svg" alt="visa card" />
                        </Stack>
                    </div>
                    <div className="mainHome__pay__container__cards">
                        <span>Efectivo en cualquiera de las sucursales participantes</span>
                        <Stack className="container__cards" direction='row' spacing={4} w="50%">
                            <img className="card__oxo" src="https://cms.volaris.com/globalassets/1nextgen/payments/oxxo.svg" alt="oxo icon" />
                            <img className="card__seven" src="https://cms.volaris.com/globalassets/1nextgen/payments/seven.svg" alt="seven icon" />
                            <img className="card_walmark" src="https://cms.volaris.com/globalassets/1nextgen/payments/walmart.svg" alt="walmart icon" />
                            <img className="card_famahorro" src=" https://cms.volaris.com/globalassets/1nextgen/payments/famahorro.svg" alt="famahorro card" />
                        </Stack>
                    </div>
                </Stack>
            </section >
            <Stack className="mainHome__containerCards" direction='column'>
                <h2>Servicios disponibles</h2>
                <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card className= "card" w="75%">
                        <CardHeader>
                            <Heading size='md'> 
                            <img src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovertransportation.svg" alt="cart icon"/></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className="cardTittle">Transporte</Text>
                        </CardBody>
                        <CardFooter>
                        <Text className="cardP"> Renta un auto o reserva un shuttle. </Text>
                        </CardFooter>
                    </Card>
                    <Card className= "card" w="75%">
                        <CardHeader>
                            <Heading size='md'> 
                            <img src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoveryavas.svg" alt="yavas icon"/></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className="cardTittle">Vuelo + Hotel</Text>
                        </CardBody>
                        <CardFooter>
                        <Text  className="cardP"> Encuentra las mejores ofertas para tu viaje. </Text>
                        </CardFooter>
                    </Card>
                    <Card className= "card" w="75%">
                        <CardHeader>
                            <Heading size='md'> 
                            <img src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovergroups.svg" alt="group icon"/></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className="cardTittle">Grupos</Text>
                            
                        </CardBody>
                        <CardFooter>
                        <Text  className="cardP">Obtén una cotización para grupos de más de 9 personas.</Text>
                        </CardFooter>
                    </Card>
                    <Card className= "card" w="75%">
                        <CardHeader>
                            <Heading size='md'> 
                            <img src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoverhotels.svg" alt="bed icon"/></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className="cardTittle">Hoteles</Text>
                        </CardBody>
                        <CardFooter>
                        <Text  className="cardP"> Reserva una habitación en cualquier parte del mundo. </Text>
                        </CardFooter>
                    </Card>
                    <Card className= "card" w="75%">
                        <CardHeader>
                            <Heading size='md'> 
                            <img src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovercargo.svg" alt="box icon"/></Heading>
                        </CardHeader>
                        <CardBody>
                            <Text className="cardTittle">Carga</Text>
                            
                        </CardBody>
                        <CardFooter>
                        <Text  className="cardP">Contamos con servicio de carga y mensajería.</Text>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Stack>
    </div>)

}




export default FormRedondo;