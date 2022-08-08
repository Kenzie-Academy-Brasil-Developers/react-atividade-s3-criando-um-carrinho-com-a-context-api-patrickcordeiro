import { createContext, useState } from "react";

export const CounterContext = createContext({});

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const aumentar = () => {
    console.log("clicou");
    setCounter(counter + 1);
  };

  const diminuir = () => {
    console.log("clicou");
    setCounter(counter - 1);
  };

  return (
    <CounterContext.Provider value={{ counter, aumentar, diminuir }}>
      {children}
    </CounterContext.Provider>
  );
}
