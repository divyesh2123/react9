import React, { Dispatch } from 'react'
import { AppState } from './reducer/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { CountActions } from './action/counterAction';
import { AppDispatch } from './store/store';

export default function Counter() {
    const countDispatch = useDispatch<AppDispatch>();

    const { count } = useSelector((state: AppState) => state.counter);

const handleIncrement = () => {
    countDispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
  
  };
  return (
    <div>{count}

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}
