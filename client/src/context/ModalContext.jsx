import React, { useState, createContext } from 'react';

export const ModalLoginContext = createContext();

export const ModalLoginProvider = (props) => {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <ModalLoginContext.Provider value={[modalLogin, setModalLogin]}>
      {props.children}
    </ModalLoginContext.Provider>
  )
}

export const ModalRegisterContext = createContext();

export const ModalRegisterProvider = (props) => {
  const [modalRegister, setModalRegister] = useState(false);

  return (
    <ModalRegisterContext.Provider value={[modalRegister, setModalRegister]}>
      {props.children}
    </ModalRegisterContext.Provider>
  )
}