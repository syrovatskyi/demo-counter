import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import {Page} from "./Page";
import {CounterList} from "./CounterList";


function App() {

  const data = {
    "data": {
      "expertisePage": {
        "id": "6033b662f694f727886a9ff4",
        "title": "denisa",
        "expertise_types": [
          {
            "id": "6035115f7097035d03ebe0fb",
            "title": "FrontEnd",
            "technologyAreas": [
              {
                "id": "603511887097035d03ebe0fd",
                "title": "First",
                "technologyItems": [
                  {
                    "id": "6033b980f694f727886a9ff9",
                    "title": "React"
                  },
                  {
                    "id": "603401d9ccf943ae0192f05e",
                    "title": "Angular"
                  }
                ]
              },
              {
                "id": "603511927097035d03ebe0fe",
                "title": "Second",
                "technologyItems": [
                  {
                    "id": "603511d47097035d03ebe0ff",
                    "title": "JavaScript"
                  },
                  {
                    "id": "603511dc7097035d03ebe100",
                    "title": "HTML"
                  },
                  {
                    "id": "603511e57097035d03ebe101",
                    "title": "CSS"
                  }
                ]
              }
            ]
          },
          {
            "id": "603511687097035d03ebe0fc",
            "title": "BackEnd",
            "technologyAreas": [
              {
                "id": "603511927097035d03ebe0fe",
                "title": "Second",
                "technologyItems": [
                  {
                    "id": "603511d47097035d03ebe0ff",
                    "title": "JavaScrit"
                  },
                  {
                    "id": "603511dc7097035d03ebe100",
                    "title": "HTML"
                  },
                  {
                    "id": "603511e57097035d03ebe101",
                    "title": "CSS"
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  };

  const newData = {
    data: {
      expertisePage: {
        ...data.data.expertisePage,
        expertise_types: data.data.expertisePage.expertise_types.map(element => {
          return {
            ...element,
            technologyAreas: element.technologyAreas.map(item => {
              return {
                ...item,
                technologyItems: changeArray(item.technologyItems)
              }
            })
          }
        })
      }
    }
  };
  // console.log('data = ', data);
  // console.log('newData =', newData);

  function changeArray(array) {
    return array.map(e => e.title).join(', ');
  };

  const arr = [1, 2, 3, 4, 5];
  const [counter, setCounter] = useState(0);

  const addCounters = () => {
    counter === arr.length - 1 ? setCounter(counter) : setCounter(counter => counter + 1)
  };

  const deleteCounters = () => {
    counter <= 0 ? setCounter(counter) : setCounter(counter => counter - 1)
  };

  return (
    <div className='app'>
      <Box>
        <Button variant="contained" color="secondary" onClick={deleteCounters}>
          ---
        </Button>
        <Button variant="contained" color="primary" onClick={addCounters}>
          +++
        </Button>

        <div>
          <CounterList
            counters={arr}
            counter={counter}/>
        </div>
      </Box>
      <Box className='page-container'>
        <Page data={newData}/>
      </Box>
    </div>
  )
}

export default App
