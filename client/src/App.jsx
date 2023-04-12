import React, { useContext, useState } from "react"
import MoviesDetail from "./pages/MoviesDetail"
import Navbar from "./components/Navbar"
import './index.css'
import Profile from "./pages/Profile"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Tvshows from "./pages/Tvshows"
import Movies from "./pages/Movies"
import Home from "./pages/Home"
import Payment from "./pages/Payment"
import Transaction from "./pages/Transaction"
import AddFilm from "./pages/admin/AddFilm"
import Film from "./pages/Film"
import AddEpisode from "./pages/admin/AddEpisode"
import PrivateRoute from "./auth/PrivateRoute"

function App() {
  // const [user, setUser] = useContext(UserContext)
  const [isLogin, setIsLogin] = useState(false);

  return(
    <>
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
    </>
  )
}

export default App
