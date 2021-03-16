import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {CounterList} from "./CounterList";
import {MaterialTable} from './MaterialTable'



function App() {

  const products = [
    {
      "id": 7619,
      "supplierCode": "BB5478",
      "ean": null,
      "name": "Gazelle Shoes",
      "warnings": true
    },
    {
      "id": 7620,
      "supplierCode": "DV2636",
      "ean": null,
      "name": "Trefoil Tights",
      "warnings": true
    },
    {
      "id": 7621,
      "supplierCode": "ED5959",
      "ean": null,
      "name": "3-Stripes Tee",
      "warnings": false
    },
    {
      "id": 7622,
      "supplierCode": "EJ9708",
      "ean": null,
      "name": "Manchester United Away Socks",
      "warnings": false
    },
    {
      "id": 7623,
      "supplierCode": "FM4289",
      "ean": null,
      "name": "Manchester United 20/21 Home Shorts",
      "warnings": true
    }
  ];
  // const arr = [1, 2, 3, 4, 5];
  const [counter, setCounter] = useState(0);

  const addCounters = () => {
    counter === products.length - 1 ? setCounter(counter) : setCounter(counter => counter + 1)
  };

  const deleteCounters = () => {
    counter <= 0 ? setCounter(counter) : setCounter(counter => counter - 1)
  };

  return (
    <>
      <Box>
        <Button variant="contained" color="secondary" onClick={deleteCounters}>
          ---
        </Button>
        <Button variant="contained" color="primary" onClick={addCounters}>
          +++
        </Button>
      </Box>
      {/*<Box>*/}
      {/*  <CounterList*/}
      {/*    counters={arr}*/}
      {/*    counter={counter}/>*/}
      {/*</Box>*/}

        <MaterialTable products={products} counter={counter}/>

    </>
  )
}

export default App
