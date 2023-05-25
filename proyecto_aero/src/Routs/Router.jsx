import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRedondo from '../Components/form/FormRedondo'
import Form from '../Components/form/From'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}  element={<FormRedondo/>} />
        <Route path={"viajeSencillo"}  element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router