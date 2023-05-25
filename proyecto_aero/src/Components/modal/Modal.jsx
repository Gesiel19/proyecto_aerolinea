
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from 'react-modal';
import { get} from "../../Services/GetFlights"
import { useFormik } from 'formik';
import "./Modal.scss"
import planeImage from "../../assest/bg-plane.jpeg"



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

Modal.setAppElement('#root');

const FormSencillo = ({ origen, destino, salida, regreso, pasajeros, handleVuelo }) => {

    const [infoCities, handleCities] = useState([]);

    const getCities = async() => {
        const getInfoCities = await get('countriesInfo');
        handleCities(getInfoCities);
        console.log(getInfoCities);
    }    

    useEffect(() => {        
        getCities();
    }, [])
}


const ModalForm = ({ isOpen, onClose, handleVuelo }) => {
  const initialValues = {
    origen: '',
        destino: '',
        salida: '',
        regreso: '',
        pasajeros: 0,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      onClose();
    }, 400);
  };

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {            
        values.regreso = '';
        // console.log("values", values);
        handleSubmit(values);
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

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
        
      <h2>¿A dónde viajas?</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className='form'>
          <div>
          <Field type="email" id="email" name="email"  />
            
        
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </Modal>
  );
}

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container'>
          <figure>
            <img src={planeImage} alt="plane" />

        </figure>
        <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={4}>
       <FormControl className="first__text">
                    <legend> Busca un nuevo destino y comienza la aventura</legend>
                </FormControl>
      <FormLabel>Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
      </Flex>
      <button onClick={openModal}>Vuelo Sencillo</button>
      <button onClick={openModal}>Fecha de viaje</button>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Modals























// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import Modal from 'react-modal';

// import {
//     FormControl,
//     FormLabel,
//     FormErrorMessage,
//     Input,
//     Flex,
//     Button,
//     Stack,
//     useDisclosure

// } from '@chakra-ui/react'

// Modal.setAppElement('#root');

// function ModalForm({ isOpen, onClose }) {
//   const initialValues = {
//     origen: '',
//     destino: '',
//     salida: '',
//     regreso: '',
//     pasajeros: 0,
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//      setSubmitting(false);
//       onClose();
//     }, 400);
//   };

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onClose}>
//        <figure>
//             <img src={planeImage} alt="plane" />

//         </figure>
      
//       {/* <h2>Modal Form</h2> */}
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form>
//         <Flex overflow="wrap" flexWrap="wrap" alignContent="center" flexDirection="column" spacing={4}>
//                 <FormControl>
//                     <legend> Busca un nuevo destino y comienza la aventura</legend>
//                 </FormControl>
//                 <FormLabel>Descubre vuelos al mejor precio y perfectos para cualquier viaje </FormLabel>
//                 <Stack direction='row' spacing={4}>

//                     <span onClick={selectVueloSencillo} >Viaje sencillo </span>
//                     <span onClick={selectVueloRedondo}>Viaje redondo</span>
//                 </Stack>

//                 <Stack direction='row' spacing={4}>
//                     <select value={formik.values.origen} onChange={formik.handleChange} name="origen">

//                         <option> Origen </option>
//                         {infoCities.length &&
//                             infoCities.map((item) => (
//                                 <option key={ `origin${item.id}`} value={item.id}>
//                                     {item.country}
//                                 </option>
//                             ))}
//                     </select>
//                     {/* {formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>} */}
//                     <FormErrorMessage>{formik.touched.origen && formik.errors.origen && <div>{formik.errors.origen}</div>}</FormErrorMessage>
//                     {/* </FormControl> */}


//                     {/* <FormControl w="25%"> */}

//                     <select value={formik.values.destino} onChange={formik.handleChange} name="destino">
//                         <option> Selecciona un destino </option>
//                         {/* <FormErrorMessage>{formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}</FormErrorMessage> */}
//                         {infoCities.length &&
//                             infoCities.map((item) => (
//                                 <option key={`destino${item.id}`} value={item.id}>
//                                     {item.country}
//                                 </option>
//                             ))}

//                     </select>
//                     {formik.touched.destino && formik.errors.destino && <div>{formik.errors.destino}</div>}
//                 </Stack>

//                 <Stack direction='row' spacing={4} w="85%">
//                     <Input type="date" placeholder="Salida" value={formik.values.salida} onChange={formik.handleChange} name="salida" />
//                     {/* {formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>} */}
//                     {/* <FormErrorMessage>{formik.touched.salida && formik.errors.salida && <div>{formik.errors.salida}</div>}</FormErrorMessage> */}


//                     <Input type="date" value={tipoDeVuelo? '': formik.values.regreso} onChange={formik.handleChange} disabled={tipoDeVuelo} placeholder="Regreso" name="regreso"/>

//                     <FormErrorMessage>{formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>}</FormErrorMessage>

//                     {/* </FormControl> */}
//                 </Stack>

//                 {/* {formik.touched.regreso && formik.errors.regreso && <div>{formik.errors.regreso}</div>} */}


//                 <FormLabel>Pasajeros</FormLabel>
//                 <Stack direction='colum' spacing={10} w="45%">
                    
//                     <select value={formik.values.pasajeros} onChange={formik.handleChange} w="45%" name="pasajeros">
//                         <option value="1"> 1 </option>
//                         <option value="2"> 2 </option>
//                         <option value="3"> 3 </option>
//                     </select>
//                     {formik.touched.pasajeros && formik.errors.pasajeros && <div>{formik.errors.pasajeros}</div>}
//                     {/* <FormErrorMessage>{formik.touched.pasajeros&& formik.errors.pasajeros&& <div>{formik.errors.pasajeros}</div>}</FormErrorMessage> */}



//                     <Input placeholder="Tienes un código de promoción"  w="610px" />
//                 </Stack>

//                 <Button className="form__button" type="submit" disabled={formik.isSubmitting} leftIcon={<TbPlaneTilt />} colorScheme='teal' variant='outline' >
//                     <figure>
//                         <img>
//                         </img>
//                     </figure>
//                     <span > Buscar vuelo
//                     </span>
//                 </Button>


//             </Flex>
        
//         </Form>
//       </Formik>
//     </Modal>
//   );
// }

// const Modal = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Formik with Modal Example</h1>
//       <button onClick={openModal}>Donde estoy</button>
//       <ModalForm isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// }

// export default Modal;
