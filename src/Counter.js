import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Count} from './Count'

export const Counter = ({initialCount}) => {
  // first way
  // const [count, setCount] = useState(initialCount);

  // second way
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(initialCount)
  }, [initialCount]);

  const handleIncrement = () => {
    setCount(count => count + 1)
  };

  const handleDecrement = () => {
    setCount(count => count - 1)
  };
 return (
    <>
      {
          <div>
          <Count count={count}/>
          <Button variant="contained" color="secondary" onClick={handleDecrement}>
            --
          </Button>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            ++
          </Button>
          </div>
      }

    </>
   )
};

