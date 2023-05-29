import React from 'react'
import React, { useEffect, useState } from "react";
import planeImage from "../../assest/bg-plane.jpeg"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./BannerPay.scss"
import { get } from "../../Services/GetFlights"
import { useNavigate } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'



const BannerPay = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {
    const initialValues = {
        origen: '',
        destino: '',
        salida: '',
        regreso: '',
        pasajeros: 0,
    };
    return (
        <div>BannerPay</div>
    )
}

export default BannerPay