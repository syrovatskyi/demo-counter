import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {Count} from './Count';

export const Counter = ({initialCount}) => {

  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count => count + 1)
  };

  const handleDecrement = () => {
    setCount(count => count - 1)
  };

 return (
    <>
      {
        <Box>
          <Count count={count}/>
          <Button variant="contained" color="secondary" onClick={handleDecrement}>
            --
          </Button>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            ++
          </Button>
        </Box>
      }
    </>
   )
};

