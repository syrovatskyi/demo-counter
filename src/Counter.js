import React from 'react';
import Button from '@material-ui/core/Button';

export const Counter = ({count, handleDecrement, handleIncrement}) => {

 return (
    <>
      <h1>Count: {count}</h1>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        --
      </Button>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        ++
      </Button>
    </>
   )
};

