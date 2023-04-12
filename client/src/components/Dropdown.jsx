import React from 'react'
import userLogo from '../assets/images/icons/avatar.png'
import payLogo from '../assets/images/icons/pay.png'
import logoutLogo from '../assets/images/icons/logout.png'
import filmLogo from '../assets/images/icons/film.png'
import { useNavigate, Link } from 'react-router-dom'

export function DropdownUser() {
  // usenavigate untuk redirect
  const navigate = useNavigate()

  function logoutUser() {
    localStorage.removeItem("dumblogin")
    navigate("/")
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
  // usenavigate untuk redirect
  const navigate = useNavigate()

  function logoutAdmin() {
    localStorage.removeItem("dumblogin")
    navigate("/")
  }

  return(
    <>
      <div className="bg-blue-700">
        <div style={{backgroundColor: "#1F1F1F"}} className="absolute z-50 right-[35px] top-[50px] rounded-md my-5 w-56 p-5 float-right bg-blue-800">
          <div className="flex my-3">
            <img src={filmLogo} alt="" />
            <Link to={"/film"}>
              <h1 className="ml-3 text-white font-semibold">Film</h1>
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