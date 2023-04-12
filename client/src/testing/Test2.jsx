import React, { useState } from "react"

export default function Test2({ handleLoginProp }) {
  const [handleLogin, setHandleLogin] = useState(handleLoginProp);

  const arr = [1,2,3,4,5]

  function handleClick() {
    setHandleLogin(true);
    alert("handle click is true",handleClick)
  }

  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
      {handleLogin && <></>}
    </div>
  );
}


