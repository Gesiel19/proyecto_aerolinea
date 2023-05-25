import React, { useEffect, useState } from "react";
import planeImage from "../../assest/bg-plane.jpeg"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./FormStyle.scss"
import { get} from "../../Services/GetFlights"

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Flex,
    Button,
    Stack

} from '@chakra-ui/react'

// import{
//    PlaneIcon
// } from '@chakra-ui/icons'

import {
    TbPlaneTilt
} from "react-icons/tb"

// import { MdBuild, MdCall } from "react-icons/md"

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

    const getCities = async() => {
        const getInfoCities = await get('countriesInfo');
        handleCities(getInfoCities);
        console.log(getInfoCities);
    }
    

    useEffect(() => {        
        getCities();
    }, [])

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
            values.regreso = '';
            console.log("values", values);
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

    return (<div className="container">
        <figure>
            <img src={planeImage} alt="plane" />

        </figure>
        <form onSubmit={formik.handleSubmit} className="form">
            <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={4}>
                <FormControl>
                    <legend> Busca un nuevo destino y comienza la aventura</legend>
                </FormControl>
                {/* <FormControl w="25%" > */}
                <FormLabel>Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
                <Stack direction='row' spacing={4}>

                    <span onClick={selectVueloSencillo} >Viaje sencillo </span>
                    <span onClick={selectVueloRedondo}>Viaje redondo</span>
                </Stack>

                <Stack direction='row' spacing={4}>
                    <select value={formik.values.origen} onChange={formik.handleChange} name="origen">

                        <option> Origen </option>
                        {infoCities.length &&
                            infoCities.map((item) => (
                                <option key={ `origin${item.id}`} value={item.id}>
                                    {item.country}
                                </option>
                            ))}
                    </select>
                    {/* {formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>} */}
                    <FormErrorMessage>{formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>}</FormErrorMessage>
                    {/* </FormControl> */}


                    {/* <FormControl w="25%"> */}

                    <select value={formik.values.destino} onChange={formik.handleChange} name="destino">
                        <option> Selecciona un destino </option>
                        {/* <FormErrorMessage>{formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}</FormErrorMessage> */}
                        {infoCities.length &&
                            infoCities.map((item) => (
                                <option key={`destino${item.id}`} value={item.id}>
                                    {item.country}
                                </option>
                            ))}

                    </select>
                    {formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}
                </Stack>

                <Stack direction='row' spacing={4} w="85%">
                    <Input type="date" placeholder="Salida" value={formik.values.salida} onChange={formik.handleChange} name="salida" />
                    {/* {formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>} */}
                    {/* <FormErrorMessage>{formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>}</FormErrorMessage> */}


                    <Input type="date" value={tipoDeVuelo? '': formik.values.regreso} onChange={formik.handleChange} disabled={tipoDeVuelo} placeholder="Regreso" name="regreso"/>

                    <FormErrorMessage>{formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>}</FormErrorMessage>

                    {/* </FormControl> */}
                </Stack>

                {/* {formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>} */}


                <FormLabel>Pasajeros</FormLabel>
                <Stack direction='colum' spacing={10} w="45%">
                    
                    <select value={formik.values.pasajeros} onChange={formik.handleChange} w="45%" name="pasajeros">
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                    </select>
                    {formik.touched.pasajeros && formik.errors.pasajeros && <div>{formik.errors.pasajeros}</div>}
                    {/* <FormErrorMessage>{formik.touched.pasajeros&& formik.errors.pasajeros&& <div>{formik.errors.pasajeros}</div>}</FormErrorMessage> */}



                    <Input placeholder="Tienes un código de promoción"  w="610px" />
                </Stack>

                <Button className="form__button" type="submit" disabled={formik.isSubmitting} leftIcon={<TbPlaneTilt />} colorScheme='teal' variant='outline'>
                    <figure>
                        <img>
                        </img>
                    </figure>
                    <span> Buscar vuelo
                    </span>
                </Button>


            </Flex>
        </form>
    </div>)
}
export default FormRedondo;