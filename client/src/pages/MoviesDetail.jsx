import React from 'react'
import moviesDetail3 from '../assets/images/moviesdetail/moneyheist-3.png'
import { Link, useParams } from 'react-router-dom'
import FakeDataFinal from "../components/FakeDataFinal"
import { useQuery } from 'react-query'
import { API } from '../config/Api'

function MoviesDetail() {
  const { id } = useParams()

  let { data: film } = useQuery('filmDetailChache', async () => {
    const response = await API.get(`/film/${id}`)
    return response.data.data
  }) 
  console.log(film) 

  return (
    <div style={{color: 'white'}} className="detail-movies bg-black">
     <div className="bg-black">
       <iframe width="800" height="400" className="mx-auto" src={film?.linkfilm} frameborder="0"></iframe>
     </div>

     <div className="flex p-5 justify-center items-center">
       <div className="w-[50%] flex">
         <div className="bg-red-400 w-[30%]">
           <img className="w-full" src={film?.thumbnailfilm} alt="" />
         </div>
         <div className="description w-[70%]">
           <h1 className="text-2xl font-bold ml-5">{film?.title}</h1>
           <div className="date flex mx-5 items-center my-3">
              <h5 className="mr-3 text-gray-700 font-semibold">{film?.year}</h5>
              
              {film?.category.name == "Tv Shows" && (
               <Link to={"/tvshows"}> <h5 className="text-white font-semibold py-2 px-5 ml-4 border-2 rounded-md border-solid">{film?.category.name}</h5></Link>
              )}

              {film?.category.name == "Movies" && (
               <Link to={"/movies"}> <h5 className="text-white font-semibold py-2 px-5 ml-4 border-2 rounded-md border-solid">{film?.category.name}</h5></Link>
              )}

           </div>
           <p className="mx-5 text-justify">{film?.description}</p>
         </div>
       </div>

       <div className="carousel w-[30%] rounded-md flex flex-col">
        <div className="mb-5 flex justify-end">
        <Link to={"/addepisode"}><h1 className='p-2 w-40 bg-red-700 text-center rounded-md cursor-pointer'>+ Add Episode</h1></Link>
        </div>
        
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
             <img src={moviesDetail3} className="w-full" />
             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide2" className="btn btn-circle">❮</a> 
               <a href="#slide4" className="btn btn-circle">❯</a>
             </div>
           </div> 

           <div id="slide4" className="carousel-item relative w-full">
             <img src={moviesDetail3} className="w-full" />
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