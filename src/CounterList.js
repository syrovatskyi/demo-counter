import React from 'react';
import { v4 as uuid } from 'uuid';
import {Counter} from "./Counter";

export const CounterList = ({counters, counter}) => {

  return (
    <>
      {counters.filter((i, index) => index <= counter).map((item) => (
        <Counter
          key={uuid()}
          initialCount={item}
        />
        )
      )}
    </>
  )
};
