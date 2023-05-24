import React, {useContext } from 'react'
import logos from '../assets/images/dumbflix.png'
import { Link } from 'react-router-dom'
import { DropdownAdmin, DropdownUser } from './Dropdown'
import Login from '../auth/Login'
import Register from '../auth/Register'
import { ModalLoginContext, ModalRegisterContext } from "../context/ModalContext"
import { DropdownAdminContext, DropdownContext } from '../context/DropdownContext'

import { UserContext } from "../context/UserContext"

function Navbar() {
  const [state] = useContext(UserContext);

  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [modalRegister, setModalRegister] = useContext(ModalRegisterContext)

  const [dropdown, setDropdown] = useContext(DropdownContext)
  const [dropdownAdmin, setDropdownAdmin] = useContext(DropdownAdminContext)

  const handleShowLoginModal = () => {
    setModalLogin(!modalLogin)
  } 

  const handleShowRegister = () => {
    setModalRegister(!modalRegister)
  } 

  // dropdown by role
  function showAndCloseDropdown() {
    if(state.user.role == "Admin"){
      setDropdownAdmin(!dropdownAdmin)
    } else if(state.user.role == "User"){
      setDropdown(!dropdown)
    }
  }

  // avatar image
  const avatarimage = state.user.avatarprofile

  return (
    <>
      <div style={{backgroundColor: "#1F1F1F"}} className="flex justify-between items-center pl-9">

        {state.user.role == "Admin" ? (
          <div className="logo py-3 mr-75 w-[70%] flex">
            <Link to={"/"}><img src={logos}/></Link>
          </div>
        ) : (
          <div className=" w-[30%]">
            <ul className="flex">
              <Link to={"/"}>
                <li className="p-3 font-semibold">Home</li>
              </Link>
              <Link to={"/tvshows"}>
                <li className="p-3 font-semibold">TV Shows</li>
              </Link>
              <Link to={"/movies"}>
                <li className="p-3 font-semibold">Movies</li>
              </Link>
            </ul>
          </div>
        )}

        {state.user.role !== "Admin" && (
          <div className="logo py-3 mr-75 w-[60%] flex justify-center">
            <Link to={"/"}><img src={logos}/></Link>
          </div>
        )}
        
        <div className="register-login pr-9 w-[30%]">
          <ul className="flex justify-end">
            {state.user.token ? (
              <div onClick={showAndCloseDropdown} className="flex flex-end float-right items-center">
                <img className="w-10 h-10 object-cover border-white border-solid border-2 rounded-full" src={avatarimage} alt="" />
              </div>
            ): (
              <>
                <li onClick={handleShowRegister} className="py-1 px-5 rounded-md bg-white list-none font-semibold text-red-700">Register</li>
                <li onClick={handleShowLoginModal} className="py-1 px-5 rounded-md bg-red-700 ml-5 font-semibold text-white">Login</li>
              </>
            )}
          </ul>
        </div>
        
        {dropdown && <DropdownUser /> }
        {dropdownAdmin && <DropdownAdmin/> }

        {modalLogin && <Login /> }
        {modalRegister && <Register /> }

      </div>
    </>
  )
}

export default Navbar
