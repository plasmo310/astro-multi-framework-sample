import { useState } from "react";

function ReactCounter() {
  const [count, setCount] = useState<number>(0);
  const doubled = count * 2;

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Add
      </button>
      <button type="button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
export default ReactCounter;
