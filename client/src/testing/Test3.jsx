import React from "react";
import Test2 from "./Test2";

function Test3() {
  return (
    <div>
      <h1>Welcome to My Test3!</h1>
      <Test2 handleLoginProp={false} />
    </div>
  );
}

export default Test3;


export function FakeDataMovies() {
  const datas = [
    {
      title: "The GodFather",
      image: "dsds",
      date: "1972",
    },
    {
      title: "The Dark Knight",
      image: "dsd",
      date: "2008",
    },
  ]

  return datas((title, image, date) => {
    return (
      <div>
        
      </div>
    )

  })
}