import * as React from "react";

interface CounterProps {
  name: string;
}

const Counter: React.FC<CounterProps> = (props) => {
  const { name } = props;
  return <p>{name} counter</p>;
};

export default Counter;
