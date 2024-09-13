import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, LightMode } from '@chakra-ui/react'
import App from './App.jsx'
import { extendTheme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  light:{
    900: '#ffffff',
    800: '#153e75',
    700: '#2a69ac',
  },
  dark:{
    100: '#111111'
  }
}

const theme = extendTheme({ colors })


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>  
    </Provider>
  </StrictMode>,
)
