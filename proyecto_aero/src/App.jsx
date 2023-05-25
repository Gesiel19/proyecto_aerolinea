import React from 'react'
import { ShowFlights } from './Components/ShowFlights/ShowFlights'
import FormRedondo from './Components/form/FormRedondo';


export const App = () => {
  return (
    <div>
        <FormRedondo />
        <ShowFlights />
    </div>
  )
}

export default App;

