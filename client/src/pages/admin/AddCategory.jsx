import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { API } from "../../config/Api"

function AddCategory() {
  const navigate = useNavigate()

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

      const response = await API.post('/category', formData)
      console.log("add category success : ", response)
      navigate('/dashboard')
    } catch (error) {
      console.log("add category failed : ", error)
      console.log(form)
    }
  })

  return (
    <div className="bg-black w-screen h-screen py-5">
      <form onSubmit={(e) => handleSubmit.mutate(e)} className="mx-auto w-[620px] flex flex-col p-3 rounded-md">
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