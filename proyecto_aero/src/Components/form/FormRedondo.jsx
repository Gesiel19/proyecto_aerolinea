import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import planeImage from "../../assest/bg-plane.jpeg"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./FormStyle.scss";
import { get } from "../../Services/GetFlights";
import Swal from "sweetalert2";
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

// import{
//    PlaneIcon
// } from '@chakra-ui/icons'

import {
    TbPlaneTilt
} from "react-icons/tb"

// import { MdBuild, MdCall } from "react-icons/md"

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


const FormRedondo = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {

    const [infoCities, handleCities] = useState([]);

    const getCities = async () => {
        const getInfoCities = await get('countriesInfo');
        handleCities(getInfoCities);
        console.log(getInfoCities);
    }


    useEffect(() => {
        getCities();
    }, [])

    const navigateR = useNavigate();
    const goTickets = () => {
        navigateR("tickets")
    }


    const initialValues = {
        origen: '',
        destino: '',
        salida: '',
        regreso: '',
        pasajeros: 0,
    };


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

    const [tipoDeVuelo, setTipoDeVuelo] = useState(false);

    const selectVueloSencillo = () => {
        setTipoDeVuelo(true)
    }
    const selectVueloRedondo = () => {
        setTipoDeVuelo(false)
    }



    const filterFligth = async (values) => {

        const vuelosFiltrados = await get("flightInformation")

        const getSession = JSON.parse(sessionStorage.getItem('infoVuelos'));
        console.log(getSession);
        if (getSession.length) {

            const resultado = vuelosFiltrados.some(item => {

                return item.Origin_country === getSession.origen;
            });


            console.log(resultado);

            // if (vuelosFiltrados === ) {

            // }



            // navigate('/vuelos')
        } else {
            Swal.fire(
                'upps',
                'No se encontraron vuelos!',
                'error'
            )

        }
    }

    const handleSubmit = async () => {
        // e.preventDefault();
        console.log(initialValues);
        if (
            initialValues.origen !== "" &&
            initialValues.destino !== "" &&
            initialValues.salidaDate !== "" &&
            initialValues.regresoDate !== ""

        ) {
            console.log("se puede continuar");
            await filterFligth(initialValues)
        } else {
            console.log("llene los datos porfavor");
        }
    };
    handleSubmit();



    return (
        <div className="mainHome">
            <section className="mainHome__containerForm">


                <figure >
                    <img src={planeImage} alt="plane" />

                </figure>
                <form onSubmit={formik.handleSubmit} className="form">
                    <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={10}>
                        <FormControl >
                            <legend> Busca un nuevo destino y comienza la aventura. </legend>
                        </FormControl>
                        {/* <FormControl w="25%" > */}
                        <FormLabel className ="form__label" >Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
                        <Stack className="form__selectVuelo" direction='row' spacing={7} w="50%" >

                            <span onClick={selectVueloSencillo} >Viaje sencillo </span>
                            <span onClick={selectVueloRedondo}>Viaje redondo</span>
                        </Stack>

                        <Stack direction='row' spacing={4} w="90%" className ="form__selectCountry">
                            <select value={formik.values.origen} onChange={formik.handleChange} name="origen" className ="form__selectOrigin">

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

                            <select value={formik.values.destino} onChange={formik.handleChange} name="destino" className ="form__selectDestination">
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

                        <Stack direction='row' spacing={4} w="85%" className ="form__inputsDate">
                            <Input type="date" className ="form__inputSalida" placeholder="Salida" value={formik.values.salida} onChange={formik.handleChange} name="salida" />
                            {/* {formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>} */}
                            {/* <FormErrorMessage>{formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>}</FormErrorMessage> */}


                            <Input type="date" className ="form__inputRegreso" value={tipoDeVuelo ? '' : formik.values.regreso} onChange={formik.handleChange} disabled={tipoDeVuelo} placeholder="Regreso" name="regreso" id="inputR" />

                            <FormErrorMessage>{formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>}</FormErrorMessage>

                            {/* </FormControl> */}
                        </Stack>

                        {/* {formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>} */}
                        <Stack direction='row' spacing={4} w="90%">
                            <select value={formik.values.pasajeros} onChange={formik.handleChange} w="40%" name="pasajeros">
                                <option value="."> Pasajeros </option>
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
                            <Input placeholder="Tienes un código de promoción" w="40%"/> 
                        </Stack>
                        
                        <Button className="form__button" type="submit" disabled={formik.isSubmitting} leftIcon={<TbPlaneTilt />} colorScheme='teal' variant='outline' >
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
            <section className="mainHome__containerCards">
                <SimpleGrid spacing={4} w="100%" templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </section>
        </div>)

}




export default FormRedondo;