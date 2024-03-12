import { useState } from "react";
import "./app.css";

export function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}
