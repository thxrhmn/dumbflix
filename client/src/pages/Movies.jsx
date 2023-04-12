import React from 'react'
import '../assets/css/header.css'
import headerwp from '../assets/images/moviess/movies.png'
import headertext from '../assets/images/moviess/moviestext.png'
import FakeDataFinal from '../components/FakeDataFinal'
import  { Link } from "react-router-dom"

function Movies() {
  return (
    <div className="headerwp items-center relative bg-black">
      <img className="headerrr" src={headerwp} />
      <div className="header mb-9 absolute top-40 left-20 w-[500px]">
        <img src={headertext} />
        <p className="w-25 mt-3">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
        <div className="flex mb-11 my-4 items-center">
          <p className="">2019</p>
          <p className="py-2 px-5 ml-4 border-2 rounded-md border-solid">Movies</p>
        </div>
        <Link to={"/moviesdetail/16"}><a className="bg-red-700 py-3 px-9 font-semibold">WATCH NOW!</a></Link>
      </div>
      <div className="card-list bg-black pb-20">
        <h3 className="mx-7 pt-6 font-semibold">Movies</h3>
        <div className="flex flex-wrap justify-between mx-12 mt-4">

          {FakeDataFinal.slice(12, 24).map((item) => (
            <div className="card__custom p-2 w-[15%]">
              <Link to={`/moviesdetail/${item.id}`}><img src={item.image} /></Link>
              <Link to={`/moviesdetail/${item.id}`}><h1>{item.title}</h1></Link>
              <h3 className="text-slate-700">{item.date}</h3>
            </div>
          ))}

      </div>
      </div>
    </div>
  )
}

export default Movies