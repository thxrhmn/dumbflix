import React, { useState, createContext } from 'react';

export const DropdownContext = createContext();

export const DropdownProvider = (props) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <DropdownContext.Provider value={[dropdown, setDropdown]}>
      {props.children}
    </DropdownContext.Provider>
  )
}

export const DropdownAdminContext = createContext()

export const DropdownAdminProvider = (props) => {
  const [dropdownAdmin, setDropdownAdmin] = useState(false);

  return (
    <DropdownAdminContext.Provider value={[dropdownAdmin, setDropdownAdmin]}>
      {props.children}
    </DropdownAdminContext.Provider>
  )
}