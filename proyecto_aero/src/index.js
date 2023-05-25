import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import Router from './Routs/Router';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
 
    <Router />

  </ChakraProvider>
);

