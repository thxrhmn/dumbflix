import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/Api";

function Film() {
  const [selectedValue, setSelectedValue] = useState(false);
  const [categories, setCategories] = useState(null)
  const [idDelete, setIdDelete] = useState(null)

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    
    if (selectedValue === "Movies") {
      setSelectedValue(false);
      console.log(selectedValue);
    } else if (selectedValue === "TV Shows") {
      setSelectedValue(true)
    }
  }

  // fetching category data
  const getCategories = async () => {
    try {
      const response = await API.get('/categories')
      setCategories(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  // fetching data using useQuery
  let { data: films, refetch } = useQuery('filmsCache', async () => {
    const response = await API.get('/films');
    return response.data.data;
  });

  // handle delete
  const handleDelete = (e) => {
    e.preventDefault()
    const buttonvalue = e.target.value
    setIdDelete(Number(buttonvalue))
  }
  
  // delete by id
  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/film/${id}`)
      refetch()
    } catch (error){
      console.log(error)
    }
  })

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(()=> {
    deleteById.mutate(idDelete)
  }, [])

  const categoryTvshows = films?.filter((film) => film.category_id === 2)
  const categoryMovies = films?.filter((film) => film.category_id === 1)

  return (
    <div className="items-center relative bg-black h-screen">
      <div className="flex ml-7 pt-7 items-center w-[1260px]">

        <div className="flex w-[650px]">
          <h1 style={{ fontSize: "20px" }} className="text-white font-semibold">List Film</h1>
          <select value={selectedValue} onChange={handleChange} className="border-[1px] border-white rounded-md p-1 text-white ml-2 bg-black" name="categories" id="categories">
            
            {categories?.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
            
          </select>
        </div>

        <h1 className="text-red-700 font-semibold bg-white p-1 rounded-md px-5 ml-auto cursor-pointer">
          <Link to={"/transaction"}>Transaction</Link>
        </h1>
        <h1 className="text-white font-semibold bg-red-700 p-1 rounded-md px-5 ml-auto cursor-pointer">
          <Link to={"/addcategory"}>+ Add Categories</Link>
        </h1>
        <h1 className="text-white font-semibold bg-red-700 p-1 rounded-md px-5 ml-auto cursor-pointer">
          <Link to={"/addepisode"}>+ Add Episode</Link>
        </h1>
        <h1 className="text-white font-semibold bg-red-700 p-1 rounded-md px-5 ml-auto cursor-pointer">
          <Link to={"/addfilm"}>+ Add Film</Link>
        </h1>
      </div>

      <div className="card-list bg-black pb-20">
        <div className="flex flex-wrap gap-6 mx-12 mt-4">

          {selectedValue ?  (
            <>
              {categoryTvshows?.map((item) => (
                <div className="card__custom p-2 w-[15%]">
                  <Link to={`/moviesdetail/${item.id}`}><img src={item.thumbnailfilm} /></Link>
                  <Link to={`/moviesdetail/${item.id}`}>{item.title}</Link>
                  <h3 className="text-slate-700">{item.year}</h3>
                  <div className="flex justify-between mt-4">
                    <button type="buton" className="bg-red-700 w-[45%] rounded-md cursor-pointer" name={item.id} value={item.id}>Edit</button>
                    <button onClick={handleDelete} type="buton" className="bg-red-700 w-[45%] rounded-md cursor-pointer" name={item.id} value={item.id}>Delete</button>
                  </div>
                </div>
              ))}
            </>
          ): (
            <>
              {categoryMovies?.map((item) => (
                <div className="card__custom p-2 w-[15%]">
                  <Link to={`/moviesdetail/${item.id}`}><img src={item.thumbnailfilm} /></Link>
                  <Link to={`/moviesdetail/${item.id}`}>{item.title}</Link>
                  <h3 className="text-slate-700">{item.year}</h3>
                  <div className="flex justify-between mt-4">
                    <button type="buton" className="bg-red-700 w-[45%] rounded-md cursor-pointer" name={item.id} value={item.id}>Edit</button>
                    <button onClick={handleDelete} type="buton" className="bg-red-700 w-[45%] rounded-md cursor-pointer" name={item.id} value={item.id}>Delete</button>
                  </div>
                </div>
              ))}
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Film;
