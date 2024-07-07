import React from "react";
const Multipliction = ({n1, n2}) => {
  const multipliction = (n1, n2) => {
    return n1 * n2;
  };
  return <div>{multipliction(n1, n2)}</div>;
};
export default Multipliction;
