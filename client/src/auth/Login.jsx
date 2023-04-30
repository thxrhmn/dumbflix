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
  const [showMessage, setShowMessage] = useState(null)

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
      
      const succesAlert = (
        <div className="alert alert-success shadow-lg mb-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Login Succes!</span>
          </div>
        </div>
      )

      setShowMessage(succesAlert)

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
      const dangerAlert = (
        <div className="alert alert-error shadow-lg mb-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Email or password incorrect!</span>
          </div>
        </div>
      )

      setShowMessage(dangerAlert)
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
          {showMessage && showMessage}
          <button className="bg-red-700 font-semibold p-3 rounded-md text-white mb-3" type="submit">Login</button>
          <p className="text-white">Don't have an account ? <a onClick={closeLoginModalAndShowRegister} className="font-semibold cursor-pointer">Click Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Login