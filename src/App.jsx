import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  let addValue = () => {
    counter = counter + 1;
    // console.log("value", Math.random());
    setCounter(counter);
  };
  let subValue=()=>{
    counter=counter-1
    setCounter(counter)
  }


  const randomNumber = Math.floor(Math.random() * counter) + 0;

  return (
    <>
      <h1>The counter value is {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value</button>

      <h2><footer>The Random value between 0 to {counter} is {randomNumber}</footer></h2>
    </>
  );
}

export default App;