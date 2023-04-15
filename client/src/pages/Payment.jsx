import React, { useRef, useState }  from 'react'
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
          {/* <input className="border-2 rounded-md p-2 mb-4" type="number" id="number" placeholder="Input Your Id Number" />
          <input ref={fileInputRef} hidden className="border-2 rounded-md p-2 mb-7" type="file" id="file" placeholder="Attache proop of transfer" />
          <div onClick={handleClick} className="bg-white flex justify-between p-2 mb-10 rounded-md cursor-pointer">
            <h1 className="text-red-700 font-semibold items-center">Attache proof of transfer</h1>
            <img src={Attach} alt="" />
          </div> */}
          {/* <input type='checkbox' className="bg-yellow-300" /> */}
          <select hidden>
            <option value="1-month">1-month</option>
            <option value="3-month">3-month</option>
            <option value="6-month">6-month</option>
            <option value="12-month">12-month</option>
          </select>

          <div className='text-black flex gap-6 mb-5'>
            <div className='w-[120px] h-[150px] hover:bg-red-600 hover:border-red-300 rounded-md text-white border-2 border-white flex flex-col items-center justify-center active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl'>30K</h1>
                <h1 className='text-center font-semibold text-1xl'>1 Month</h1>
              </div>
            </div>
            <div className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl'>80K</h1>
                <h1 className='text-center font-semibold text-1xl'>3 Month</h1>
              </div>
            </div>
            <div className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl'>150K</h1>
                <h1 className='text-center font-semibold text-1xl'>6 Month</h1>
              </div>
            </div>
            <div className='w-[120px] h-[150px] rounded-md text-white border-2 border-white flex flex-col items-center justify-center'>
              <div className='h-1/2'>
                <h1 className='text-center font-semibold text-5xl'>300K</h1>
                <h1 className='text-center font-semibold text-1xl'>12 Month</h1>
              </div>
            </div>
          </div>

          <button className="bg-red-700 font-semibold p-3 rounded-md text-white mb-3" type="submit">Kirim</button>
        </form>
      </div>
    </div>
  )
}

export default Premium