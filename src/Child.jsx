import React, { useState } from "react";

function Child({ number }) {
  console.log("Child rendered");
  return <div>Child-{number * 5}</div>;
}

export default React.memo(Child);
