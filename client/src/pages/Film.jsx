import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import FakeDataFinal from "../components/FakeDataFinal";

function Film() {
  const [selectedValue, setSelectedValue] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
    if (selectedValue === "movies") {
      setSelectedValue(false);
      console.log(selectedValue);
    }
  };

  return (
    <div className="headerwp items-center relative bg-black">
      <div className="flex ml-7 pt-7 items-center w-[1260px]">
        <h1 style={{ fontSize: "20px" }} className="text-white font-semibold">
          List Film
        </h1>
        <select
          value={selectedValue}
          onChange={handleChange}
          className="border-[1px] border-white rounded-md p-1 text-white ml-2 bg-black"
          name="categories"
          id="categories"
        >
          <option value="tvseries">Tv Series</option>
          <option value="movies">Movies</option>
        </select>
        <h1 className="text-white font-semibold bg-red-700 p-1 rounded-md px-5 ml-auto cursor-pointer">
          <Link to={"/addfilm"}> Add Film</Link>
        </h1>
      </div>

      <div className="card-list bg-black pb-20">

        {selectedValue ? (
          <>
            <h3 className="mx-7 pt-6 font-semibold">Movies</h3>
            <div className="flex flex-wrap justify-between mx-12 mt-4">
              {FakeDataFinal.slice(12, 24).map((item) => (
                <div className="card__custom p-2 w-[15%]">
                  <Link to={`/moviesdetail/${item.id}`}><img src={item.image} /></Link>
                  <Link to={`/moviesdetail/${item.id}`}>{item.title}</Link>
                  <h3 className="text-slate-700">{item.date}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="mx-7 pt-6 font-semibold">TV Series</h3>
            <div className="flex flex-wrap justify-between mx-12 mt-4">
              {FakeDataFinal.slice(0, 12).map((item) => (
                <div className="card__custom p-2 w-[15%]">
                  <Link to={`/moviesdetail/${item.id}`}><img src={item.image} /></Link>
                  <Link to={`/moviesdetail/${item.id}`}>{item.title}</Link>
                  <h3 className="text-slate-700">{item.date}</h3>
                </div>
              ))}
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}

export default Film;
