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