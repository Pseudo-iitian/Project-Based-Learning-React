import { useState, useEffect, useRef } from "react";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);
  let intervalId = useRef(null);

  const start = () => {
    if (intervalId.current != null) {
      clearInterval(intervalId.current);
    }
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  function pause() {
    clearInterval(intervalId.current);
  }

  function reset() {
    setCount(0);
    clearInterval(intervalId.current);
  }

  // Clean up the interval on component unmount
  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <>
      <div className="watch pl-10 pt-10">Stop Watch</div>
      <Counter count={count} reset={reset} start={start} pause={pause} />
    </>
  );
}

export default App;


// I must know this 
// unmount , mount, useRef & useEffect, clearInterval