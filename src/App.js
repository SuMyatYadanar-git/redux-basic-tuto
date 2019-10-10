import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {increment} from './action'
import {decrement} from './action'
import {getVendor} from './action'
import vendorReducer from './reducer/vendorReducer';

function App() {

   const vendorList = useSelector(state => state.vendorReducer)
  // const counter = useSelector(state => state.counter)
  // const islogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
 
  return (
    <div>
      {/* <h3>hello react counter{counter}</h3> */}
      {/* <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement()) }>-</button> */}
      <button onClick={()=>dispatch(getVendor())}>click me </button>
      <div> {JSON.stringify(vendorList.vendorList, null, 4)}</div>
      


    </div>
  );
}

export default App;

// 