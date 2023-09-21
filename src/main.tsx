import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ErrorContextProvider } from './error.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ErrorContextProvider>
        <App />
      </ErrorContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
