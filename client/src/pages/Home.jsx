import React from 'react'
import Header from '../components/Header'

import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

function Home() {
  // console.log(import.meta.env.VITE_REACT_APP_BASE_URL)
  // console.log(import.meta.env.VITE_REACT_APP_MIDTRANS_CLIENT_KEY)

  // fetching data using useQuery
  let { data: films } = useQuery('filmsCache', async () => {
    const response = await API.get('/films')
    return response.data.data;
  });

  const categoryTvshows = films?.filter((film) => film.category_id === 1)
  const categoryMovies = films?.filter((film) => film.category_id === 2)

  return (
    <>
      <Header />

      <div style={{color: 'white'}} className="bg-black pb-20">
        <h3 className="mx-7 pt-6 font-semibold">TV Series</h3>

        <div className="flex flex-wrap mx-12 mt-4 gap-6">
          {categoryTvshows?.map((item) => (
            <div key={item.id} className="card__custom p-2 w-[15%]">
               <Link to={`/moviesdetail/${item.id}`}><img src={item.thumbnailfilm}/></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link>
              <h3 className="text-slate-700">{item.year}</h3>
            </div>
          ))}
        </div>

        <h3 className="mx-7 pt-6 font-semibold">Movies</h3>

        <div className="flex flex-wrap mx-12 mt-4 gap-6">
          {categoryMovies?.map((item) => (
            <div key={item.id} className="card__custom p-2 w-[15%]">
              <Link to={`/moviesdetail/${item.id}`}><img src={item.thumbnailfilm} /></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link> 
              <h3 className="text-slate-700">{item.year}</h3>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Home