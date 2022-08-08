import { useContext } from "react";
import { CounterContext } from "../../contexts/counter";

function Counter() {
  const { counter } = useContext(CounterContext);
  console.log(counter);

  return (
    <>
      <h1>Meu contador</h1>
      <h1>{counter}</h1>
    </>
  );
}

export default Counter;
