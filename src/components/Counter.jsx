import {useState} from "react";
import React from 'react';

let Counter = function () {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
      };
    
      function decrement() {
        setCount(count - 1)
      };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>   
    )
}

export default Counter;