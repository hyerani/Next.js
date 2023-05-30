"use client";
import { useState } from "react";
import NavBar from "../navbar/page";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>counter {counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
    </div>
  );
}
