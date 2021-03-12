import React, {useState} from "react";
import {Counter} from "./Counter"


function App() {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {arr.map(item => <Counter initialCount={item}/>
      )}
    </div>
  )
}

export default App
