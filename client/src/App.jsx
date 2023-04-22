import './index.css'
import MoviesDetail from "./pages/MoviesDetail"
import Navbar from "./components/Navbar"
import Profile from "./pages/Profile"
import Tvshows from "./pages/Tvshows"
import Movies from "./pages/Movies"
import Home from "./pages/Home"
import Payment from "./pages/Payment"
import Transaction from "./pages/Transaction"
import AddFilm from "./pages/admin/AddFilm"
import Film from "./pages/Film"
import AddEpisode from "./pages/admin/AddEpisode"

import { Routes, Route, useNavigate } from "react-router-dom"
import { PrivateRouteLogin, PrivateRouteUser, PrivateRouteAdmin } from "./auth/PrivateRoute"

import React, { useContext, useState, useEffect } from "react"
import { UserContext } from './context/UserContext'

import { API, setAuthToken } from "./config/Api"
import NotFound from './components/NotFound'
import AddCategory from './pages/admin/AddCategory'

function App() {
  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true)

  let navigate = useNavigate()

  useEffect(() =>{
    // Redirect Auth but just when isLoading is false
    if (!isLoading) {
      if (state.isLogin === false) {
        navigate("/")
      }
    }
  }, [isLoading])

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
      checkUser()
    } else {
      setIsLoading(false)
    }
  }, [])

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')
      console.log("check user succes", response)
      // get user data
      let payload = response.data.data
      // get token from localstorage
      payload.token = localStorage.token
      // send data to user context
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      })
      setIsLoading(false)
    } catch(error) {
      console.log("check user failed: ", error)
      dispatch({
        type: 'AUTH_ERROR',
      })
      setIsLoading(false)
    }
  }


  return(
    <>
      {isLoading ? null : (
        <>
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Home />} />  
            <Route path="*" element={<NotFound />} />

            <Route element={<PrivateRouteLogin />} >
              <Route path="/moviesdetail/:id" element={<MoviesDetail />} />
              
              <Route element={<PrivateRouteUser/>} >
                <Route path="/tvshows" element={<Tvshows />} />  
                <Route path="/movies" element={<Movies />} />  
                <Route path="/profile" element={<Profile />} />  
                <Route path="/payment" element={<Payment />} />
              </Route>

              <Route element={<PrivateRouteAdmin/>} >
                <Route path="/addfilm" element={<AddFilm />} />
                <Route path="/addcategory" element={<AddCategory />} />
                <Route path="/addepisode" element={<AddEpisode />} />
                <Route path="/dashboard" element={<Film />} />
                <Route path="/transaction" element={<Transaction />} />
              </Route>
            </Route>

          </Routes>
        </>
      )}
    </>
  )
}

export default App
