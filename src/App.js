import { useState } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default function App() {
  const [value, setValue] = useState("");
  const [state, setState] = useState([]);

  const allValue = state.map((s) => s.item);
  const handleOnClick = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    addToCalc(e.target.value);
    setValue("");
  };

  const getResult = (e) => {};

  const addToCalc = (value) => {
    const newState = { item: value, key: nanoid() };
    setState([...state, newState]);
  };

  // TODO:
  // - Only get last operator
  // - Clear Button
  // - GetResult
  
  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="result-panel">{allValue}</div>
      <div className="number-panel">
        <form onSubmit={getResult}>
          <button onClick={handleOnClick} value="0">
            0
          </button>
          <button onClick={handleOnClick} value="1">
            1
          </button>
          <button onClick={handleOnClick} value="2">
            2
          </button>
          <button onClick={handleOnClick} value="3">
            3
          </button>
          <button onClick={handleOnClick} value="4">
            4
          </button>
          <button onClick={handleOnClick} value="5">
            5
          </button>
          <button onClick={handleOnClick} value="6">
            6
          </button>
          <button onClick={handleOnClick} value="7">
            7
          </button>
          <button onClick={handleOnClick} value="8">
            8
          </button>
          <button onClick={handleOnClick} value="9">
            9
          </button>
          <button onClick={handleOnClick} value="+">
            +
          </button>
          <button onClick={handleOnClick} value="-">
            -
          </button>
          <button onClick={handleOnClick} value="x">
            x
          </button>
          <button onClick={handleOnClick} value=":">
            :
          </button>
          <button type="submit">=</button>
        </form>
      </div>
    </div>
  );
}
