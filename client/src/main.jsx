import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import { Loader } from './components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
)
