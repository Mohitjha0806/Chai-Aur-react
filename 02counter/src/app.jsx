import { useState } from "react";
import "./app.css";

export function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    isme ☝️ ye code baar baar likhni par bhi same ek baar hi kam karega code agar value change karni hai toh last result ko leke + 1 karn ahai hai jo neeche 👇  bataya hai 


    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);

    // 
  
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
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
