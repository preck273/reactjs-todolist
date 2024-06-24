import React from 'react';

export default function TodoListCard(props) {
    // Destructure the props to get the children, deleteTodo, index, and editTodo functions
    const {children, deleteTodo, index, editTodo} = props

     // Return the JSX to render the component
  return (
    <div>
        <li className='todoItem'>
            {/* Display the children elements passed to this component */}
            {children}
            <div className='actionsContainer'>
                <button onClick={() =>{
                    editTodo(index)
                }}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    deleteTodo(index)
                }}>
                     <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    </div>
  );
}
