import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import {CounterList} from "./CounterList";


function App() {
  const arr = [1, 2, 3, 4, 5];

  const [counters, setCounters] = useState(arr);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter)
  }, [counter]);

  const addCounters = () => {
    setCounter(counter => counter + 1);
    if (counter === counters.length - 1) {
      setCounter(counter)
    }
  };

  const deleteCounters = () => {
    setCounter(counter => counter - 1)
  };

  return (
    <>
      <div>
        <Button variant="contained" color="secondary" onClick={deleteCounters}>
          ---
        </Button>
        <Button variant="contained" color="primary" onClick={addCounters}>
          +++
        </Button>
      </div>
      <div>
        <CounterList
          counters={counters}
          counter={counter}/>
      </div>
    </>
  )
}

export default App
