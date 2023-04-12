import React, {useRef, useState} from 'react'
import Attach from "../../assets/images/icons/attach.png"
import { useMutation } from 'react-query'
// import { API } from '../../config/Api'
import { API } from "../../config/Api"

function AddFilm() {

  
  const [addFilm, setAddfilm] = useState(1)

  function incrementAddFilm() {
    setAddfilm(addFilm + 1)
  }

  const fileInputRefAttach = useRef(null);

  const handleClickAttach = () => {
    fileInputRefAttach.current.click();
  };


  return (
    <div className="bg-black w-screen py-5">
      <div className="mx-auto w-[620px] flex flex-col p-3 rounded-md">
        <h1 className="text-white font-semibold my-3">Add Film</h1>
        <div className="flex"> 
          <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title" id="title" placeholder="Title" />
          <input ref={fileInputRefAttach} hidden style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="file" name="attach" id="attach" />
          <div onClick={handleClickAttach} style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white">
            <h3>Attach Thumbnail</h3>
            <img src={Attach} alt="" />
          </div>
        </div>
        <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="number" name="date" id="date" placeholder="Year" />
        <select name="category" id="category" style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] text-white border-white border-[1px] ">
          <option disabled hidden value="">Categories</option>
          <option style={{background: "rgba(210, 210, 210, 0.25)"}} className="text-black" value="">TV Series</option>
          <option style={{background: "rgba(210, 210, 210, 0.25)"}} className="text-black" value="">Movies</option>
        </select>
        <textarea style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-4 rounded-[3px] border-white border-[1px] text-white" type="text" name="description" id="description" placeholder="Description" />
        <div className="flex">
          <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title-episode" id="title-episode" placeholder="Title Episode" />
          <input ref={fileInputRefAttach} hidden style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="file" name="attach2" id="attach2" />
          <div onClick={handleClickAttach} style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white">
            <h3>Attach Thumbnail</h3>
            <img src={Attach} alt="" />
          </div>
        </div>
        <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="link-film" id="link-film" placeholder="Link Film" />
        {/* <div className="flex">
          <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title-episode" id="title-episode" placeholder="Title Episode" />
          <input ref={fileInputRefAttach} hidden style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="file" name="attach2" id="attach2" />
          <div onClick={handleClickAttach} style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white">
            <h3>Attach Thumbnail</h3>
            <img src={Attach} alt="" />
          </div>
        </div>
        <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="link-film" id="link-film" placeholder="Link Film" /> */}
        <div style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[100%] justify-between mb-3 rounded-[3px] border-white border-[1px] text-white">
          <h3 className="text-center text-red-600 font-semibold size mx-auto text-4xl my-auto">+</h3>
        </div>
        <div className="">
          <button className="p-2 bg-red-700 rounded-md w-[200px] float-right text-white font-semibold">Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddFilm