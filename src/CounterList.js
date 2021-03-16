import React from 'react';
import { v4 as uuid } from 'uuid';
import {Counter} from "./Counter";

export const CounterList = ({counters, counter}) => {
  const newCounters = counters.filter((i, index) => index <= counter);
  console.log(newCounters);
  return (
    <>
      {/*{newCounters.map((item) =>*/}
      {/*    <Counter*/}
      {/*      key={uuid()}*/}
      {/*      initialCount={item}*/}
      {/*    />*/}
      {/*)}*/}

      {/*{counters.map((item, index) =>*/}
      {/*  index <= counter ? (*/}
      {/*    <Counter*/}
      {/*      key={uuid()}*/}
      {/*      initialCount={item}*/}
      {/*    />*/}
      {/*  ) : (*/}
      {/*    <p key={index}>{null}</p>*/}
      {/*  )*/}
      {/*)}*/}

      {counters.map((item, index) =>
        index <= counter && <Counter
          key={uuid()}
          initialCount={item}
        />
      )}
    </>
  )
};
