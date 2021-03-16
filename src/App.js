import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {CounterList} from "./CounterList";
import Box from "@material-ui/core/Box";


function App() {
  const arr = [1, 2, 3, 4, 5];
  const [counter, setCounter] = useState(0);

  const addCounters = () => {
    counter === arr.length - 1 ? setCounter(counter) : setCounter(counter => counter + 1)
  };

  const deleteCounters = () => {
    counter <= 0 ? setCounter(counter) : setCounter(counter => counter - 1)
  };

  return (
    <>
      <Box>
        <Button variant="contained" color="secondary" onClick={deleteCounters}>
          ---
        </Button>
        <Button variant="contained" color="primary" onClick={addCounters}>
          +++
        </Button>
      </Box>
      <div>
        <CounterList
          counters={arr}
          counter={counter}/>
      </div>
    </>
  )
}

export default App
