import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';

export const Counter = ({initialCount}) => {
  // first way
  const [count, setCount] = useState(initialCount);

  // second way
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount(initialCount)
  // }, [initialCount]);

  const handleIncrement = () => {
    setCount(count => count + 1)
  };

  const handleDecrement = () => {
    setCount(count => count - 1)
  };
 return (
    <>
      <h1>Count: {count}</h1>
      <Button variant="contained" color="primary" onClick={handleDecrement}>
        --
      </Button>
      <Button variant="contained" color="secondary" onClick={handleIncrement}>
        ++
      </Button>
    </>
   )

};

