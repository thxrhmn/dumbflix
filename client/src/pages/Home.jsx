import React from 'react'
import Header from '../components/Header'
import "../assets/css/cardlist.css";
import FakeDataFinal from '../components/FakeDataFinal';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />

      <div className="card-list bg-black pb-20">
        <h3 className="mx-7 pt-6 font-semibold">TV Series</h3>
        <div className="flex flex-wrap mx-12 mt-4 gap-6">
          {FakeDataFinal.slice(0, 6).map((item) => (
            <div className="card__custom p-2 w-[15%]">
               <Link to={`/moviesdetail/${item.id}`}><img src={item.image}/></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link>
              <h3 className="text-slate-700">{item.date}</h3>
            </div>
          ))}
        </div>

        <h3 className="mx-7 pt-6 font-semibold">Movies</h3>
        <div className="flex flex-wrap mx-12 mt-4 gap-6">
          {FakeDataFinal.slice(12, 18).map((item) => (
            <div className="card__custom p-2 w-[15%]">
              <Link to={`/moviesdetail/${item.id}`}><img src={item.image} /></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link> 
              <h3 className="text-slate-700">{item.date}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home