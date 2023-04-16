import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { UserContextProvider } from './context/UserContext';

import { QueryClient, QueryClientProvider } from "react-query"

import { ModalLoginProvider, ModalRegisterProvider } from "./context/ModalContext"
import { DropdownProvider, DropdownAdminProvider } from "./context/DropdownContext"
import { BrowserRouter as Router } from 'react-router-dom';

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserContextProvider>
        <QueryClientProvider client={client}>
          <ModalLoginProvider>
            <ModalRegisterProvider>
              <DropdownProvider>
                <DropdownAdminProvider>
                  <Router>      
                    <App />
                  </Router>     
                </DropdownAdminProvider>
              </DropdownProvider>
            </ModalRegisterProvider>
          </ModalLoginProvider>
        </QueryClientProvider>
      </UserContextProvider>
  </React.StrictMode>,
)
