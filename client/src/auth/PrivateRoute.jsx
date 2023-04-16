import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext"
import { ModalLoginContext } from "../context/ModalContext"

export function PrivateRouteLogin() {
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [state] = useContext(UserContext);
  
  if (!state.isLogin) {
    setModalLogin(true)
    return (
        <Navigate to="/"/>
      )
  }
  return <Outlet />
}

export function PrivateRouteUser() {
  const [modalLogin, setModalLogin] = useContext(ModalLoginContext)
  const [state] = useContext(UserContext);

  if (state.user.role === "Admin") {
    return <Navigate to="/dashboard" />
  }
  return <Outlet />
}

export function PrivateRouteAdmin() {
  const [state] = useContext(UserContext);

  if (state.user.role !== "Admin") {
    return <Navigate to="/movies" />
  }
  return <Outlet />
}