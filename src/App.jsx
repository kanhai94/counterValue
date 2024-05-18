import { useState} from "react";
import Clock from "./Clock";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message


  let addValue = () => {
    counter = counter + 1;
    if(counter>5){
      counter=0
      setShowError(true);
      setErrorMessage('Error: You exceed the limit');
    
    }
    else{
      setShowError(false);
    }
    setCounter(counter);

  };
  let subValue=()=>{
    counter=counter-1
    if(counter<0){
      counter=0
      setShowError(true); // Show error message when counter goes below 0
      setErrorMessage('Error: Counter cannot be negative!');


    }

    setCounter(counter)
  }

 


  const randomNumber = Math.floor(Math.random() * counter) + 0;


  return (
    <>
    
<Clock/>

      <h1> The counter value is {counter}</h1>

      {showError && (
        <div className="error-popup">
          <p>{errorMessage}</p>
        </div>
      )}

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Subtract Value</button>

  

      <h2><footer>The Random value between 0 to {counter} is {randomNumber}</footer></h2>
    </>
  );
}

export default App;
