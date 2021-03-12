import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import {Counter} from "./Counter"


function App() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map(item => <Counter key={uuid()} initialCount={item}/>
      )}
    </div>
  )
}

export default App
