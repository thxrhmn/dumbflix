import React, {useRef, useState} from 'react'
import Attach from "../../assets/images/icons/attach.png"
import { useMutation } from 'react-query'
import { API } from "../../config/Api"
import { useNavigate } from 'react-router-dom'

function AddEpisode() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    thumbnailfilm: '',
    linkfilm: '',
    film_id: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    })
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // configuration
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }

      // store data with FormData as object
      const formData = new FormData()
      formData.set('title', form.title)
      formData.set('thumbnailfilm', form.thumbnailfilm[0], form.thumbnailfilm[0].name)
      formData.set('linkfilm', form.linkfilm)
      formData.set('film_id', Number(form.film_id))
      
      // insert episode data
      const response = await API.post('/episode', formData, config)
      console.log("add episode success : ", response)
      navigate('/dashboard')
    } catch (error) {
      console.log("add episode failed : ", error)
      console.log(form)
    }
  })

  const fileInputRefAttach = useRef(null);

  const handleClickAttach = () => {
    fileInputRefAttach.current.click();
  };

  return (
    <div className="bg-black w-full h-screen py-5">
      <form onSubmit={(e) => handleSubmit.mutate(e)}>
        <div style={{backgroundColor: "#1F1F1F"}} className="mx-auto w-[620px] flex flex-col p-3 rounded-md">
          <h1 className="text-white font-semibold my-3 text-2xl">Add Episode</h1>
          <div className="flex"> 
            <input onChange={handleChange} style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title" id="title" placeholder="Title Episode" />
            <input onChange={handleChange} ref={fileInputRefAttach} hidden style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="file" name="thumbnailfilm" id="thumbnailfilm" />
            <div onClick={handleClickAttach} style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white">
              <h3>Attach Thumbnail</h3>
              <img src={Attach} alt="" />
            </div>
          </div>
          <input onChange={handleChange} style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[100%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="linkfilm" id="linkfilm" placeholder="Link Film" />
          <input onChange={handleChange} style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[100%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="number" name="film_id" id="film_id" placeholder="Film ID" />
          <div className="mb-3">
            <button type='submit' className="p-2 bg-red-700 rounded-md w-[200px] float-right text-white font-semibold">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddEpisode