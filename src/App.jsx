import { useState} from "react";
import Clock from "./Clock";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);

  let addValue = () => {
    counter = counter + 1;
    if(counter>100){
      counter=0
    }
    // console.log("value", Math.random());
    setCounter(counter);
  };
  let subValue=()=>{
    counter=counter-1
    if(counter<0){
      counter=0
    }

    setCounter(counter)
  }

 


  const randomNumber = Math.floor(Math.random() * counter) + 0;


  return (
    <>
    
<Clock/>

      <h1> The counter value is {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value</button>

      <h2><footer>The Random value between 0 to {counter} is {randomNumber}</footer></h2>
    </>
  );
}

export default App;
