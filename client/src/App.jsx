import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
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
import PrivateRoute from "./auth/PrivateRoute"

import React, { useContext, useState, useEffect } from "react"
import { UserContext } from './context/UserContext'

import { API, setAuthToken } from "./config/Api"

function App() {
  // let navigate = useNavigate()

  // const [user, setUser] = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(false);

  const [state, dispatch] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   // Redirect Auth but just when isLoading is false
  //   if (!isLoading) {
  //     if (state.isLogin === false) {
  //       // navigate('/auth');
  //     }
  //   }
  // }, [isLoading]);

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //     checkUser();
  //   } else {
  //     setIsLoading(false)
  //   }
  // }, []);

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get('/check-auth');
  //     console.log("check user success : ", response)
  //     // Get user data
  //     let payload = response.data.data;
  //     // Get token from local storage
  //     payload.token = localStorage.token;
  //     // Send data to useContext
  //     dispatch({
  //       type: 'USER_SUCCESS',
  //       payload,
  //     });
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log("check user failed : ", error);
  //     dispatch({
  //       type: 'AUTH_ERROR',
  //     });
  //     setIsLoading(false)
  //   }
  // };

  return(
    <>
      {isLoading ? null :
      <Router>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />  
              {/* <PrivateRoute> */}

                {/* <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/signin"
                  element={<SignIn setIsLogin={setIsLogin} />}
                /> */}
                  <Route path="/profile" element={<Profile />} />  
                {/* <Route element={<PrivateRoute isLogin={isLogin} />}>   */}
                  <Route path="/tvshows" element={<Tvshows />} />  
                  <Route path="/movies" element={<Movies />} />  
                  <Route path="/moviesdetail/:id" element={<MoviesDetail />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/transaction" element={<Transaction />} />
                  <Route path="/addfilm" element={<AddFilm />} />
                  <Route path="/addepisode" element={<AddEpisode />} />
                  <Route path="/film/" element={<Film />} />
                {/* </Route>   */}
              {/* </PrivateRoute> */}
          </Routes>
      </Router>
      }
    </>
  )
}

export default App
