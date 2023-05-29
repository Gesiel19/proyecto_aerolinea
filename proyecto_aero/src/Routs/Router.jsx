import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormRedondo from '../Components/form/FormRedondo'
import TicketsPreview from '../Components/ticketsPreview/TicketsPreview'
import Modals from '../Components/modal/Modal'
import SeatSelection from '../Components/SeatSelection/SeatSelection'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"}  element={<FormRedondo/>} />
        <Route path={"tickets"}  element={<TicketsPreview />} />
        <Route path={"seats"}  element={<SeatSelection/>} />
        <Route path={"modal"}  element={<Modals />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router