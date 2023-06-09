import React, { useContext } from 'react'
import userLogo from '../assets/images/icons/avatar.png'
import payLogo from '../assets/images/icons/pay.png'
import logoutLogo from '../assets/images/icons/logout.png'
import filmLogo from '../assets/images/icons/film.png'
import { useNavigate, Link } from 'react-router-dom'
import { DropdownAdminContext, DropdownContext } from '../context/DropdownContext'
import { UserContext } from '../context/UserContext'

export function DropdownUser() {
  const [_, dispatch] = useContext(UserContext)
  const [dropdown, setDropdown] = useContext(DropdownContext)

  const navigate = useNavigate()

  function logoutUser() {
    setDropdown(!dropdown)
    navigate("/")

    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <>
      <div className="bg-blue-700">
        <div style={{backgroundColor: "#1F1F1F"}} className="absolute z-50 right-[35px] top-[50px] rounded-md my-5 w-56 p-5 float-right bg-blue-800">
          <div className="flex my-3">
            <img src={userLogo} alt="" />
            <Link to={"/profile"}>
              <h1 className="ml-3 text-white font-semibold">Profile</h1>
            </Link>
          </div>
          <div className="flex my-3">
            <img src={payLogo} alt="" />
            <Link to={"/payment"}>
              <h1 className="ml-3 text-white font-semibold">Pay</h1>
            </Link>
          </div>
          <div className="flex my-3">
            <img src={logoutLogo} alt="" />
              <h1 onClick={logoutUser} className="ml-3 text-white font-semibold cursor-pointer">Logout</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export function DropdownAdmin(){
  const [_, dispatch] = useContext(UserContext)
  const [dropdownAdmin, setDropdownAdmin] = useContext(DropdownAdminContext)

  const navigate = useNavigate()

  function logoutAdmin() {
    setDropdownAdmin(!dropdownAdmin)
    navigate("/")

    dispatch({
      type: 'LOGOUT',
    })
  }

  return(
    <>
      <div className="bg-blue-700">
        <div style={{backgroundColor: "#1F1F1F"}} className="absolute z-50 right-[35px] top-[50px] rounded-md my-5 w-56 p-5 float-right bg-blue-800">
          <div className="flex my-3">
            <img src={filmLogo} alt="" />
            <Link to={"/dashboard"}>
              <h1 className="ml-3 text-white font-semibold">Dashboard</h1>
            </Link>
          </div>
          <div className="flex my-3">
            <img src={logoutLogo} alt="" />
              <h1 onClick={logoutAdmin} className="ml-3 text-white font-semibold cursor-pointer">Logout</h1>
          </div>
        </div>
      </div>
    </>
  )
}