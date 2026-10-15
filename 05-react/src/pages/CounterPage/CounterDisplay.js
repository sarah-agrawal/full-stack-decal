import React from "react";

// TODO: Receive counter value as prop and display it
// Description: Shows the current value of the counter
function CounterDisplay({ counter}) {
  return <h2>Count: {counter}</h2>;
}

export default CounterDisplay;