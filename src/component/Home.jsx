import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByUserValue,
  increment,
  incrementByUserValue,
} from "../Redux/NumSlice";

const Home = () => {
  const { autoCounter, userCounter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <div className="app-container">
      <h1 className="main-title">React Redux</h1>

      <div className="counters-container">
        <div className="counter-card">
          <h2 className="counter-title">Counter 1</h2>
          <p className="counter-value">{autoCounter}</p>
          <div className="button-group">
            <button
              className="btn decrement-btn"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button
              className="btn increment-btn"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
        </div>

        <div className="counter-card">
          <h2 className="counter-title">Conunter 2</h2>
          <p className="counter-value"> {userCounter}</p>
          <div className="button-group">
            <button
              className="btn decrement-btn"
              onClick={() => dispatch(decrementByUserValue(5))}
            >
              Decrement(-5)
            </button>
            <button
              className="btn increment-btn"
              onClick={() => dispatch(incrementByUserValue(5))}
            >
              Increment(+5)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
