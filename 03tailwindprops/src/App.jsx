import { useState } from "react";
import "./App.css";
import Card from "./componants/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Mohit",
    age: "23",
  };
  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">tailwint test</h1>
      {/* <Card channel="chaiaurcode" someObj={myObj} someArr={newArr} /> */}
      <Card
        username="Jha"
        btnText="Click Me"
        paragraph="“Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!”"
      />
      <Card
        username="Mohit Jha"
        btnText="Visit Me"
        paragraph="“Happy birthday! I hope all your birthday wishes and dreams come true.”"
      />
    </>
  );
}

export default App;
