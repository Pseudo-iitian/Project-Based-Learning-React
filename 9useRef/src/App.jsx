import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const a = useRef(0); // apni value ko hold ker ke rakega

  // jbb bhi re-render hota hai to data fir se re-initialize hoti hai jo ki hmm nhi chahte ki vo ho 
  const ref = useRef();
  // useref ka use ker ke aap value to change ker rhe hai but vo re render nhi kerta to aap changing value ko display kerna chahte hai to nhi ker payenge

  // jbb bhi re0render - when we click on some button 
  useEffect(()=>{

    ref.current.style.backgroundColor = 'red';
    console.log("re-rendering...");

    // a.current += 1 ;
    // console.log( `re-rendering and the value of a is : ${a.current}`);
  },[count]);
    

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
