import React from "react";

function ValueChanger({ count, setCount }) {
  return (
    <>
      <div className="components">
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <span>{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
      </div>
    </>
  );
}

export default ValueChanger;
