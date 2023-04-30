import React, {useState, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from "react-player";
import { useQuery } from 'react-query'
import { API } from '../config/Api'
import { UserContext } from '../context/UserContext';

function MoviesDetail() {
  const { id } = useParams()
  const [selectedEpisode, setSelectedEpisode] = useState(0)
  const [state] = useContext(UserContext)

  const handleNextEpisode = () => {
    setSelectedEpisode((selectedEpisode + 1) % episodes.length)
  }

  const handlePrevEpisode = () => {
    setSelectedEpisode(
      (selectedEpisode - 1 + episodes.length) % episodes.length
    )
  }

  let { data: film } = useQuery('filmDetailChache', async () => {
    const response = await API.get(`/film/${id}`)
    return response.data.data
  }) 

  let { data: episodes } = useQuery("episodesCache", async () => {
    const response = await API.get(`film/${id}/episodes`)
    return response.data.data;
  })

  const videoId = film?.linkfilm.split('v=')[1];
  const thumbnailYoutube = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div style={{color: 'white'}} className="detail-movies bg-black">
     <div className="bg-black">
      {film?.category.name == "Movies" ? (
        <ReactPlayer
          className="w-[500px] h-[450px] mx-auto bg-blue-300"
          url={film?.linkfilm}
          width={"800px"}
          height="450px"
          light={
            <div className="">
              <img
                className="w-full h-[450px] mx-auto"
                src={thumbnailYoutube}
              />
            </div>
          }
        />
      ): (
        <>
          {episodes?.map((item, index) => {
            if (index === selectedEpisode) {
              return (
                <ReactPlayer
                  key={index}
                  className="w-[500px] h-[450px] mx-auto bg-blue-300"
                  url={item.linkFilm}
                  width={"800px"}
                  height="450px"
                  light={
                    <div className="">
                      <img
                        className="w-full h-[450px] mx-auto"
                        src={item.thumbnailFilm}
                      />
                    </div>
                  }
                />
              )
            } else {
              return null;
            }
          })}
        </>
      )}
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
          {state.user.role === "Admin" && film?.category.name == "Tv Shows" && (
            <Link to={"/addepisode"}>
              <h1 className='p-2 w-40 bg-red-700 text-center rounded-md cursor-pointer'>+ Add Episode</h1>
            </Link>
          )}
        </div>
        
         <div className="carousel w-[100%] rounded-md h-[80%]">
          
          {film?.category.name == "Movies" && (
            <div className="carousel-item relative w-full">
              <img src={thumbnailYoutube} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              </div>
            </div> 
          )}

          {episodes?.map((item, index) => {
            if (index === selectedEpisode) {
              return (
                <div key={index} className="carousel-item relative w-full">
                  <img src={item.thumbnailFilm} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <div onClick={handlePrevEpisode} className="btn btn-circle">❮</div> 
                    <div onClick={handleNextEpisode} className="btn btn-circle">❯</div>
                  </div>
                </div> 
              )
            } else {
              return null;
            }
          })}
          
         </div>
       </div>

     </div>
   </div>
  )
}


export default MoviesDetail