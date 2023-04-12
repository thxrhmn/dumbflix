import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from "react-query"

import { UserProvider } from "./context/UserContext"
import { ModalLoginProvider } from "./context/ModalLoginContext"
import { ModalRegisterProvider } from "./context/ModalRegisterContext"
import { DropdownProvider } from "./context/DropdownContext"

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UserProvider>
        <ModalLoginProvider>
          <ModalRegisterProvider>
            <DropdownProvider>
              <App />
            </DropdownProvider>
          </ModalRegisterProvider>
        </ModalLoginProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
