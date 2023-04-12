import React from 'react'
import '../assets/css/moviesdetail.css'
import moviesDetail1 from '../assets/images/moviesdetail/moneyheist-1.png'
import moviesDetail2 from '../assets/images/moviesdetail/moneyheist-2.png'
import moviesDetail3 from '../assets/images/moviesdetail/moneyheist-3.png'
import nexticon from '../assets/images/moviesdetail/nexticon.png'
import { useParams } from 'react-router-dom'
import FakeDataFinal from "../components/FakeDataFinal"

function MoviesDetail() {
  const { id } = useParams()

  const data = FakeDataFinal.find((item) => item.id === parseInt(id)) 

  return (

    <div className="movies__detail detail-movies bg-black">
      <div className="bg-black">
        <iframe width="800" height="400" className="mx-auto" src={data.trailer} frameborder="0"></iframe>
      </div>
      <div className="flex bg-black p-5 justify-center items-center">
        <div className="w-[50%] flex items-center">
          <div className="">
            <img className="w-[600px]" src={moviesDetail2} alt="" />
          </div>
          <div className="description">
            <h1 className="text-2xl font-bold ml-5">{data.title}</h1>
            <div className="date flex mx-5 items-center my-3">
              <h5 className="mr-3 text-gray-700 font-semibold">{data.date}</h5>
              <h5 className="text-white font-semibold py-2 px-5 ml-4 border-2 rounded-md border-solid">{data.catagories}</h5>
            </div>
            <p className="mx-5 text-justify">Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."</p>
          </div>
        </div>
        {/* <div className="w-[30%] relative">
          <img src={moviesDetail3} alt="" />
          <h3 className="absolute font-semibold top-20">In Play Now</h3>
          <h3 className="">Money Heist : Episode 1</h3>
        </div>
        <div className="">
          <a href="#"><img className="ml-2 w-[15px]" src={nexticon}></img></a>
        </div> */}
        {/* <div className="w-[30%] relative">
          <img src={moviesDetail3} alt="" />
          <h3 className="absolute font-semibold top-20">In Play Now</h3>
          </div>
          <div className="">
          <a href="#"><img className="ml-2 w-[15px]" src={nexticon}></img></a>
        </div> */}
       
        <div className="carousel w-[30%] rounded-md flex flex-col">
          {/* carousel */}
          <div className="carousel w-[100%] rounded-md h-[80%]">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={moviesDetail3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
              <img src={moviesDetail3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
          <h3 className="">Money Heist : Episode 1</h3>
        </div>

      </div>
    </div>
  )
}


export default MoviesDetail