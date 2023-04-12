import React, { useState, useContext } from 'react'
import { ModalLoginContext } from "../context/ModalLoginContext"
import { ModalRegisterContext } from '../context/ModalRegisterContext'
import { useMutation } from 'react-query'

function Login() {
  // data yang akan dikirim ke backend
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  // send form data to backend using useMutation
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
  
      const response = await API.post('/login', form);
  
      console.log("Login success : ", response)
  
      const alert = (
        alert("Login Succes!")
      );
      setMessage(alert);
      setForm({
        email: '',
        password: '',
      });
    } catch (error) {
      const alert = (
        alert("Email or password incorrect!")
      );
      setMessage(alert);
      console.log("login failed : ", error);
    }
  });

  // modal login from context
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [modalRegister, setModalRegister] = useContext(ModalRegisterContext)

  // get value login
  const [getValueLogin, setValueLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  })

  const handleOnChangeLogin = (e) => {
    setValueLogin({
      ...getValueLogin,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmitLogin = (e) => {
    e.preventDefault();
  }

  const closeLoginModalAndShowRegister = () => {
    setModalLogin(false)
    setModalRegister(true)
  }
  
  const closeLoginModal = () => {

    const datalocal = localStorage.getItem("dumbflix")
    const datalocalstorage = JSON.parse(datalocal)

    if (getValueLogin.emailLogin === datalocalstorage.email && getValueLogin.passwordLogin === datalocalstorage.password) {
      console.log(`hello, ${getValueLogin.emailLogin}`)
      console.log("login successful")
      console.log("ini data dari localstorage", datalocal)

      const dataqu = {
        email: datalocalstorage.email,
        password: datalocalstorage.password,
        fullname: datalocalstorage.fullname,
        gender: datalocalstorage.gender,
        phone: datalocalstorage.phone,
        address: datalocalstorage.address,
        role: datalocalstorage.role,
      }
      localStorage.setItem("dumblogin", JSON.stringify(dataqu))
    }
    setModalLogin(!modalLogin)
  }

  return (
    <>
      <div style={{backgroundColor: "#1F1F1F"}} className='absolute z-50 left-[520px] top-[150px] h-[290px] w-80 p-5 my-5 rounded-md'>
        <h1 className="font-semibold text-white mb-3 text-2xl">Login</h1>
        <form onSubmit={(e) => handleSubmit.mutate(e)} className="flex flex-col">
          <input onChange={handleOnChangeLogin} name="emailLogin" value={getValueLogin.emailLogin} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" type="email" id="emailLogin" placeholder="Email" />
          <input onChange={handleOnChangeLogin} name="passwordLogin" value={getValueLogin.passwordLogin} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-7 text-white" type="password" id="passwordLogin" placeholder="Password" />
          <button onClick={closeLoginModal} className="bg-red-700 font-semibold p-3 rounded-md text-white mb-3" type="submit">Login</button>
          <p className="text-white">Don't have an account ? <a onClick={closeLoginModalAndShowRegister} className="font-semibold cursor-pointer">Click Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Login