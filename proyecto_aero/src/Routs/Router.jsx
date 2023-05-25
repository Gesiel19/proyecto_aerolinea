import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRedondo from '../Components/form/FormRedondo'
import Form from '../Components/form/From'
import TicketsPreview from '../Components/ticketsPreview/TicketsPreview'
import Modals from '../Components/modal/Modal'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}  element={<FormRedondo/>} />
        <Route path={"viajeSencillo"}  element={<Form />} />
        <Route path={"tickets"}  element={<TicketsPreview />} />
        <Route path={"modal"}  element={<Modals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router