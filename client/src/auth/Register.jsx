import React, {useContext, useState} from 'react'
import { ModalLoginContext, ModalRegisterContext } from "../context/ModalContext"
import { useMutation } from 'react-query'
import { API } from "../config/Api"

function Register() {
  // from context
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [modalRegister, setModalRegister] = useContext(ModalRegisterContext)

  // notification when login is successful or not
  const [notif, setNotif] = useState(null);
  
  // data nantinya dikirimkan ke backend
  const [valueRegister, setValueRegister] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
    address: "",
  })

  const { email, password, fullname, gender, phone, address } = valueRegister

  // onchange = mendeteksi keyboard ketika ditekan
  const handleOnChangeRegister = (e) => {
    setValueRegister({
      ...valueRegister,
      [e.target.name]: e.target.value,
    })
  }

  // insert data using useMutation | mengirimkan data form ke backend
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
  
      const response = await API.post('/register', valueRegister)

      console.log("register success : ", response)

      const alert = (
        <div className="text-green-600 font-semibold mb-3">Register Success!</div>
      )

      setNotif(alert)
      setValueRegister({
        email: "",
        password: "",
        fullname: "",
        gender: "",
        phone: "",
        address: "",
      })

    } catch (error) {
      const alert = (
        <div className="text-red-600 font-semibold mb-3">Failed to Register</div>
      )
      setNotif(alert)
      console.log("register failed : ", error)
    }
  })
  
  const closeRegisterModal = () => {
    // setModalRegister(!modalRegister)
    // setModalLogin(!modalLogin)
  }

  const closeRegisterAndShowLoginModal = () => {
    setModalRegister(false)
    setModalLogin(true)
  }

  return (
    <>
      <div style={{backgroundColor: "#1F1F1F"}} className='absolute z-50 left-[520px] top-[50px] h-[590px] w-80 p-5 mx-auto my-5 rounded-md'>
        <h1 className="font-semibold text-white mb-3 text-2xl">Register</h1>
        <form onSubmit={(e) => handleSubmit.mutate(e)} className="flex flex-col">
          <input onChange={handleOnChangeRegister} name="email" value={email} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 email text-white" type="email" id="email" placeholder="Email" />
          <input onChange={handleOnChangeRegister} name="password" value={password} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" type="password" id="password" placeholder="Password" />
          <input onChange={handleOnChangeRegister} name="fullname" value={fullname} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" type="text" id="fullname" placeholder="Full Name" />
          <select onChange={handleOnChangeRegister} name="gender" value={gender} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" id="gender" placeholder="Gender">
            <option selected style={{display: "none"}}>Gender</option>
            <option className="text-black">Male</option>
            <option className="text-black">Female</option>
          </select>
          <input onChange={handleOnChangeRegister} name="phone" value={phone}  style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-4 text-white" type="number" id="phone" placeholder="Phone" />
          <input onChange={handleOnChangeRegister} name="address" value={address} style={{background: "rgba(210, 210, 210, 0.25)"}} className="border-2 rounded-md p-2 mb-7 text-white" type="text" id="address" placeholder="Address" />
          {notif && notif}
          <button onClick={closeRegisterModal} className="bg-white font-semibold p-3 rounded-md text-red-700 mb-3" type="submit">Register</button>
          <p className="text-white">Already have an account ? <a onClick={closeRegisterAndShowLoginModal} className="font-semibold cursor-pointer">Click Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Register