import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
