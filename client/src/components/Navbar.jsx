import React, {useState, useContext } from 'react'
import '../assets/css/navbar.css'
import logos from '../assets/images/dumbflix.png'
import { Link } from 'react-router-dom'
import { DropdownAdmin, DropdownUser } from './Dropdown'
import Login from '../auth/Login'
import Register from '../auth/Register'
import { ModalLoginContext } from '../context/ModalLoginContext'
import { ModalRegisterContext } from '../context/ModalRegisterContext'
import { UserContext } from "../context/UserContext"
import { DropdownAdminContext, DropdownContext } from '../context/DropdownContext'

function Navbar() {
  // from context
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [modalRegister, setModalRegister] = useContext(ModalRegisterContext)

  const [dropdown, setDropdown] = useContext(DropdownContext)
  const [dropdownAdmin, setDropdownAdmin] = useContext(DropdownAdminContext)

  // show login modal
  const handleShowLoginModal = () => {
    setModalLogin(!modalLogin)
  } 

  // show modal register
  const handleShowRegister = () => {
    setModalRegister(!modalRegister)
  } 

  // check role when user/admin login
  const checkRole = localStorage.getItem("role")

  function showAndCloseDropdown() {
    if(checkRole == "Admin"){
      setDropdownAdmin(!dropdownAdmin)
    } else if(checkRole == "User"){
      setDropdown(!dropdown)
    }
  }

  return (
    <>
      <div style={{backgroundColor: "#1F1F1F"}} className="flex justify-between items-center pl-9">
        <div className=" w-[30%]">
          <ul className="flex">
            <Link to={"/"}>
              <li className="p-3"><a className="font-semibold">Home</a></li>
            </Link>
            <Link to={"/tvshows"}>
              <li className="p-3"><a className="font-semibold">TV Shows</a></li>
            </Link>
            <Link to={"/movies"}>
              <li className="p-3"><a className="font-semibold">Movies</a></li>
            </Link>
          </ul>
        </div>

        <div className="logo py-3 mr-75 w-[60%] flex justify-center">
          <Link to={"/"}><img src={logos}/></Link>
        </div>
        
        <div className="register-login pr-9 w-[30%]">
          <ul className="flex justify-end">

            {checkRole ? (
              <div onClick={showAndCloseDropdown} className="flex flex-end float-right items-center">
                <img className="w-10 h-10 object-cover border-white border-solid border-2 rounded-full" src="https://avatars.githubusercontent.com/u/123728862?v=4" alt="" />
              </div>
            ): (
              <>
                <li onClick={handleShowRegister} className="py-1 px-5 rounded-md bg-white list-none"><a className="font-semibold text-red-700" href="#">Register</a></li>
                <li onClick={handleShowLoginModal} className="py-1 px-5 rounded-md bg-red-700 ml-5"><a className="font-semibold text-white" href="#">Login</a></li>
              </>
            )}

          </ul>
        </div>
              
        {dropdown ? <DropdownUser />: null}
        {dropdownAdmin ? <DropdownAdmin/>: null}

        {modalLogin ? <Login /> : null }
        {modalRegister ? <Register /> : null }

      </div>
    </>
  )
}

export default Navbar