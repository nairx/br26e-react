import React from "react";

function Child1({ click }) {
    console.log("Child1 rendered")
  return (
    <div>
      Child1
      <p>
        <button onClick={click}>Click</button>
      </p>
    </div>
  );
}

export default React.memo(Child1)