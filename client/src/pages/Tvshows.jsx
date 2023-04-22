import React from 'react'
import headerwp from '../assets/images/tvshows/tvshows.png'
import headertext from '../assets/images/tvshows/tvshowstext.png'

import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { API } from '../config/Api'


function Tvshows() {
  // fetching data using useQuery
  let { data: films } = useQuery('filmsCache', async () => {
    const response = await API.get('/films');
    return response.data.data;
  });

  console.log(films)

  const categoryTvshows = films?.filter((film) => film.category_id === 1)

  return (
    <div className="items-center relative bg-black">
      <img className="headerrr" src={headerwp} />

      <div style={{color: 'white'}} className="mb-9 absolute top-40 left-20 w-[500px]">
        <img src={headertext} />
        <p className="w-25 mt-3">Money Heist is a crime drama on Netflix - originally called La Casa de Papel. Money Heist season 3 has just been released by the streaming service. The plot reads: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."</p>
        <div className="flex mb-11 my-4 items-center">
          <p className="">2019</p>
          <p className="py-2 px-5 ml-4 border-2 rounded-md border-solid">TV Series</p>
        </div>
        <Link to={"/moviesdetail/4"}><a className="bg-red-700 py-3 px-9 font-semibold">WATCH NOW!</a></Link>
      </div>
      
      <div className="card-list bg-black pb-20">
        <h3 className="mx-7 pt-6 font-semibold">TV Series</h3>
        <div className="flex flex-wrap mx-12 mt-4 gap-6">

          {categoryTvshows?.map((item) => (
            <div className="card__custom p-2 w-[15%]">
              <Link to={`/moviesdetail/${item.id}`}><img src={item.thumbnailfilm} /></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link>
              <h3 className="text-slate-700">{item.year}</h3>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Tvshows