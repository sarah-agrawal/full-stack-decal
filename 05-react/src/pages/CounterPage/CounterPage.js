import React, {useState, useEffect} from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

// TODO: Use useState to manage counter
// TODO: Use useEffect to show a message when counter > 5
// TODO: Use useEffect to reset counter to 0 if it becomes negative
// TODO: Pass counter value to CounterDisplay as a prop
// TODO: Pass increment/decrement functions to CounterControls as props
function CounterPage() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    useEffect(() => {
        if (counter > 5) {
            setMessage("You passed 5!");
        } else {
            setMessage("")
        }
    }, [counter]);

    useEffect(() => {
      if (counter < 0) {
        setCounter(0);
      }
    }, [counter]);

  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControls increment={increment} decrement={decrement}/>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CounterPage;