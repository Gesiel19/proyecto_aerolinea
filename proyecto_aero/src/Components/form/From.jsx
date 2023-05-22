import React, { useState } from "react";
import planeImage from "../../assest/bg-plane.jpeg"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./FormStyle.scss"

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

import { MdBuild, MdCall } from "react-icons/md"

const validationSchema = Yup.object().shape({
    origen: Yup.string()
        .required('El origen es obligatorio'),
    destino: Yup.string()
        .required('El Destino es obligatoria'),
    salida: Yup.date()
        .required('La Salida es obligatoria'),
    // regreso: Yup.date()
    //     .required('El Regreso es obligatoria'),
    pasajeros: Yup.number()
        .required('Los Pasajeros son requeridos'),
});


const Form = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {

    const initialValues = {
        origen: '',
        destino: '',
        salida: '',
        regreso: '',
        pasajeros: '',
    };


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
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
            <img src={planeImage} alt="plane"  />
          
        </figure>
        <form onSubmit={formik.handleSubmit} className="form">
            <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" w="500px">
                <FormControl w="25%" >
                    <legend> Busca un nuevo destino y comienza la aventura</legend>
                </FormControl>
                {/* <FormControl w="25%" > */}
                <FormLabel>Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
                <Stack direction='row' spacing={4}>

                    <span onClick={selectVueloSencillo} >Viaje sencillo </span>
                    <span onClick={selectVueloRedondo}>Viaje redondo</span>
                </Stack>

                <Stack direction='row' spacing={4}>
                    <select {...formik.getFieldProps('origen')}>

                        <option> Origen </option>
                    </select>
                    {/* {formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>} */}
                    <FormErrorMessage>{formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>}</FormErrorMessage>
                    {/* </FormControl> */}


                    {/* <FormControl w="25%"> */}

                    <select>
                        <option {...formik.getFieldProps('destino')}> Selecciona un destino </option>
                        {/* <FormErrorMessage>{formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}</FormErrorMessage> */}


                    </select>
                    {formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}
                </Stack>

                <Stack direction='row' spacing={4}>
                    <Input type="date" placeholder="Salida" {...formik.getFieldProps('salida')} />
                    {/* {formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>} */}
                    {/* <FormErrorMessage>{formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>}</FormErrorMessage> */}


                    <Input type="date" disabled={tipoDeVuelo} placeholder="Regreso"{...formik.getFieldProps('regreso')} />

                    <FormErrorMessage>{formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>}</FormErrorMessage>

                    {/* </FormControl> */}
                </Stack>

                {/* {formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>} */}

                

                <Stack direction='row' spacing={4}>
                    <FormLabel>Pasajeros</FormLabel>
                    <select {...formik.getFieldProps('pasajeros')}>


                        <option> 1 </option>
                    </select>
                    {formik.touched.pasajeros && formik.errors.pasajeros && <div>{formik.errors.pasajeros}</div>}
                    {/* <FormErrorMessage>{formik.touched.pasajeros&& formik.errors.pasajeros&& <div>{formik.errors.pasajeros}</div>}</FormErrorMessage> */}
                   


                    <Input placeholder="Tienes un código promoción" />
                </Stack>

                <Button type="submit" disabled={formik.isSubmitting} leftIcon={<TbPlaneTilt />} colorScheme='teal' variant='outline'>
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
export default Form;