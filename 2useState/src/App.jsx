import React from "react"
import {useState} from "react"

export default function App(){
  // task - use state for clicking multiple buttons that incrementing on this 

  return (
    <>
    {/* Notice how each button “remembers” its own count state and doesn’t affect other buttons. */}
      <MyButton/>
      <MyButton/>
      <MyButton/>
    </>
  )
}

function MyButton(){
  // useState
  const [count,setCount] = React.useState(0);
  function handleClick(){
    setCount(count => count + 1);
  }
  
  return (
    <button
      onClick={handleClick}
    >
      <h1>clicked {count} times</h1>
    </button>
  )
}