"use client";
import { useState } from "react";
import NavBar from "../navbar/page";
import Seo from "../seo";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Seo title="About" />
      <h1 className={counter % 2 === 0 ? "active" : ""}>counter {counter}</h1>
      <button onClick={() => setCounter((pre) => pre + 1)}>+</button>
      <style jsx>{`
        .active {
          color: yellow;
        }
      `}</style>
    </div>
  );
}
