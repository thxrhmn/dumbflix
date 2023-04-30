import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { API } from "../../config/Api"

function AddCategory() {
  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(null)

  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    })
  }

  const { name } = form

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      const formData = new FormData()
      formData.set('name', form.name)

      if (form.name !== ""){
        const response = await API.post('/category', formData)
        console.log("add category success : ", response)

        const succesAlert = (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Add Category Succes!</span>
            </div>
          </div>
        )
  
        setShowMessage(succesAlert)
      
        function redirectPage(){
          const timeoutId = setTimeout(() => {
            navigate("/dashboard")
          }, 2000)
          return () => clearTimeout(timeoutId)
        }
        redirectPage()
      } else {
        throw error
      }
      
      
    } catch (error) {
      console.log("add category failed : ", error)
      const dangerAlert = (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Add Category Failed!</span>
          </div>
        </div>
      )

      setShowMessage(dangerAlert)
    }
  })

  return (
    <div className="bg-black w-screen h-screen">
      {showMessage && showMessage}
      <form onSubmit={(e) => handleSubmit.mutate(e)} className="mx-auto w-[620px] flex flex-col p-3 pt-7 rounded-md">
        <h1 className="text-white font-semibold my-3">Add Category</h1>
        <div className="flex flex-col"> 
          <input onChange={handleChange} style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-full mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="name" value={name} id="name" placeholder="Name" />
          <div className="">
            <button type="submit" className="float-right bg-red-700 rounded-md w-[200px] p-2 text-white font-semibold">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCategory