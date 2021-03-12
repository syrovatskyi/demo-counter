import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import {Counter} from "./Counter"


function App() {
  const arr = [1, 2, 3, 4];

  const [counterList, setCounterList] = useState(arr);
  const handleIncrement = () => {
    setCounterList(counters => counters.map(i => i + 1));
  };

  const handleDecrement = () => {
    setCounterList(counters => counters.map(i => i - 1))
  };
  return (
    <div>
      {counterList.map(item => <Counter key={uuid()} handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={item} />
      )}
    </div>
  )
}

export default App
