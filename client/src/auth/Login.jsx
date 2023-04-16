import React, { useState, useContext, useEffect } from 'react'
import { ModalLoginContext, ModalRegisterContext } from "../context/ModalContext"

import { UserContext } from '../context/UserContext'
import { useMutation } from 'react-query'
import { API, setAuthToken } from '../config/Api'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [_, dispatch] = useContext(UserContext);
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [setModalRegister] = useContext(ModalRegisterContext)

  let navigate = useNavigate()

  // notification when login success or not
  const [notif, setNotif] = useState(null)

  const [valueLogin, setValueLogin] = useState({
    email: "",
    password: ""
  })

  const { email, password} = valueLogin

  const handleOnChangeLogin = (e) => {
    setValueLogin({
      ...valueLogin,
      [e.target.name]: e.target.value,
    })
  }

  // send data to backend using useMutation
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
  
      const response = await API.post('/login', valueLogin)
  
      console.log("Login success : ", response.data.data)

      // send data to useContext
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: response.data.data,
      })

      // set authorization token header
      setAuthToken(localStorage.token)
      
      const alert = (
        <div className="text-green-600 font-semibold mb-3">Login Succes!</div>
      )
      setNotif(alert)
      setValueLogin({
        email: '',
        password: '',
      })

      function redirectPage(){
        const timeoutId = setTimeout(() => {
          if (response.data.data.role == "Admin"){
            navigate("/dashboard")
          } else if (response.data.data.role == "User"){
            navigate("/tvshows")
          }
        }, 2000)
        return () => clearTimeout(timeoutId)
      }
      redirectPage()

      function closeLoginModal(){
        const timeoutId = setTimeout(() => {
          setModalLogin(!modalLogin)
        }, 2000)
        return () => clearTimeout(timeoutId)
      }
      closeLoginModal()
        
    } catch (error) {
      const alert = (
        <div className="text-red-600 font-semibold mb-3">Email or password incorrect!</div>
      )
      setNotif(alert)
      console.log("login failed : ", error)
    }
  })

  const closeLoginModalAndShowRegister = () => {
    setModalLogin(false)
    setModalRegister(true)
  }

  return (
    <>
      <div style={{backgroundColor: "#1F1F1F"}} className='absolute z-50 left-[520px] top-[150px] w-80 p-5 my-5 rounded-md'>
        <h1 className="font-semibold text-white mb-3 text-2xl">Login</h1>
        <form onSubmit={(e) => handleSubmit.mutate(e)} className="flex flex-col">
          <input onChange={handleOnChangeLogin} name="email" value={email} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" type="email" id="emailLogin" placeholder="Email" />
          <input onChange={handleOnChangeLogin} name="password" value={password} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-7 text-white" type="password" id="passwordLogin" placeholder="Password" />
          {notif && notif}
          <button className="bg-red-700 font-semibold p-3 rounded-md text-white mb-3" type="submit">Login</button>
          <p className="text-white">Don't have an account ? <a onClick={closeLoginModalAndShowRegister} className="font-semibold cursor-pointer">Click Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Login