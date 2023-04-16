import React from 'react'
import headerwp from '../assets/images/headerwp.png'
import headertext from '../assets/images/headertext.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="headerwp items-center relative bg-black">
      <img className="headerrr" src={headerwp} />
      <div style={{color: 'white'}} className="header mb-9 absolute top-40 left-20 w-[500px]">
        <img src={headertext} />
        <p className="w-25 mt-3">Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beast</p>
        <div className="flex mb-11 my-4 items-center">
          <p className="">2019</p>
          <p className="py-2 px-5 ml-4 border-2 rounded-md border-solid">TV Series</p>
        </div>
        <Link to={"/moviesdetail/1"}><p className="bg-red-700 py-3 px-9 font-semibold w-[180px]">WATCH NOW!</p></Link>
      </div>
    </div>
  )
}

export default Header