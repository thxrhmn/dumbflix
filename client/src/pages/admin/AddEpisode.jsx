import React, {useRef, useState} from 'react'
import Attach from "../../assets/images/icons/attach.png"
import { useMutation } from 'react-query'
import { API } from "../../config/Api"

function AddEpisode() {
  const [addFilm, setAddfilm] = useState(1)

  function incrementAddFilm() {
    setAddfilm(addFilm + 1)
  }

  const fileInputRefAttach = useRef(null);

  const handleClickAttach = () => {
    fileInputRefAttach.current.click();
  };

  return (
    <div className="bg-black w-full h-screen py-5">
      <div style={{backgroundColor: "#1F1F1F"}} className="mx-auto w-[620px] flex flex-col p-3 rounded-md">
        <h1 className="text-white font-semibold my-3 text-2xl">Add Episode</h1>
        <div className="flex"> 
          <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[70%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title" id="title" placeholder="Title Episode" />
          <input ref={fileInputRefAttach} hidden style={{background: "rgba(210, 210, 210, 0.25)"}} className="p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="file" name="attach" id="attach" />
          <div onClick={handleClickAttach} style={{background: "rgba(210, 210, 210, 0.25)"}}  className="cursor-pointer items-center flex w-[30%] justify-between p-2 mb-3 rounded-[3px] border-white border-[1px] text-white">
            <h3>Attach Thumbnail</h3>
            <img src={Attach} alt="" />
          </div>
        </div>
        <input style={{background: "rgba(210, 210, 210, 0.25)"}} className="w-[100%] mr-3 p-2 mb-3 rounded-[3px] border-white border-[1px] text-white" type="text" name="title" id="title" placeholder="Link Film" />
        <div className="mb-3">
          <button className="p-2 bg-red-700 rounded-md w-[200px] float-right text-white font-semibold">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddEpisode