import React from "react";

function ValueChanger({ count, setCount }) {
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default ChildIncrement;
