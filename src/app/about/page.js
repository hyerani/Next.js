"use client";
import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>counter {counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
    </div>
  );
}
