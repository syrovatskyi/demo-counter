import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Button from '@material-ui/core/Button';
import {Counter} from "./Counter"


function App() {
  const arr = [1];

  const [counters, setCounters] = useState(arr);
  console.log('counters', counters);
  const addCounters = () => {
    setCounters(counters => [...counters, counters.length + 1])
  };

  const deleteCounters = () => {
    // console.log('counters', counters);
    // const newCounters = counters.pop();
    // setCounters(counters)
    const newCounters = [...counters];
    let removeItem = newCounters.pop();
    setCounters(newCounters)
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
        {counters.map(item => <Counter key={uuid()} initialCount={item}/>
        )}
      </div>
    </>
  )
}

export default App
