import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme.ts'
import { BrowserRouter } from 'react-router-dom'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools initialIsOpen={false}/>
          </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
