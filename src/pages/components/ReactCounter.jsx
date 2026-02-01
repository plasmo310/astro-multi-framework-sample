import { useState } from "react";

function ReactCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Add
      </button>
    </div>
  );
}
export default ReactCounter;
