import React from 'react';
import { useState } from "react"

export default function TodoInput(props) {
    // Destructure the props to get the addTodo, inputValue, and setInputValue functions
    const {addTodo, inputValue, setInputValue} = props
 
    // Return the JSX to render the component
  return (
    <header>
        <input value={inputValue} onChange={(e) => {
            // Update the input value state when the input field changes
            setInputValue(e.target.value)
        }} placeholder="Enter todo..." />
            
        <button onClick={() =>{
            addTodo(inputValue)
            setInputValue('')
        }}>Add</button>
    </header>
  );
}
