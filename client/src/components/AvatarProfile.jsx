// import Dropdown from "./Dropdown"
import { useState } from "react"

export default function AvatarProfile() {
  // show login modal
  const [handleLogin, setHandleLogin ] = useState(true)

  return(
    <>
      <div onClick={() => setHandleLogin(!handleLogin)} className="flex flex-end float-right items-center">
        {/* <h1 className="text-white font-semibold mr-4">Hello, {props.fullname}</h1> */}
        {/* <img className="w-10 h-10 object-cover border-white border-solid border-2 rounded-full" src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="" /> */}
        <img className="w-10 h-10 object-cover border-white border-solid border-2 rounded-full" src="https://avatars.githubusercontent.com/u/123728862?v=4" alt="" />
      </div>
    </>
  )
}