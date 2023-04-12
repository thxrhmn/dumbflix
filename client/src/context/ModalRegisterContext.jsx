import React, { useState, createContext } from 'react';

export const ModalRegisterContext = createContext();

export const ModalRegisterProvider = (props) => {
  const [modalRegister, setModalRegister] = useState(false);

  return (
    <ModalRegisterContext.Provider value={[modalRegister, setModalRegister]}>
      {props.children}
    </ModalRegisterContext.Provider>
  )
}