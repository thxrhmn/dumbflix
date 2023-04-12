import React, { useRef }  from 'react'
import Attach from "../assets/images/icons/attach.png"

function Premium() {

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="bg-black h-[600px] pt-28">
      <div className="mx-auto w-[550px] justify-center">
        <h1 className="font-semibold mb-4 text-4xl text-white text-center">Premium</h1>
        <div className="flex">
          <p className="text-white mb-2">Bayar sekarang dan nikmati streaming film-film yang kekinian dari </p>
          <p className="text-red-700 font-semibold ml-[3px]">DUMBFLIX</p>
        </div>
        <div className="flex justify-center mb-5">
          <p className="text-red-700 font-semibold">DUMBFLIX</p><p className="font-semibold text-white ml-2"> : 0981312323</p>
        </div>
        <form className="flex flex-col w-[100%]">
          <input className="border-2 rounded-md p-2 mb-4" type="number" id="number" placeholder="Input Your Id Number" />
          <input ref={fileInputRef} hidden className="border-2 rounded-md p-2 mb-7" type="file" id="file" placeholder="Attache proop of transfer" />
          <div onClick={handleClick} className="bg-white flex justify-between p-2 mb-10 rounded-md cursor-pointer">
            <h1 className="text-red-700 font-semibold items-center">Attache proof of transfer</h1>
            <img src={Attach} alt="" />
          </div>
          <button className="bg-red-700 font-semibold p-3 rounded-md text-white mb-3" type="submit">Kirim</button>
        </form>
      </div>
    </div>
  )
}

export default Premium