import React from 'react';
import TodoListCard from './TodoListCard';

export default function TodoList(props) {
    const {todo} = props
      


  // Return the JSX to render the component
  return (
    <ul className='main'>
        {todo.map((todo, todoIndex) =>{ //Map over the todo array and create a list item for each todo
            return (
               <TodoListCard {...props} key={todoIndex} index={todoIndex}>
                <p>{todo}</p>

               </TodoListCard>
            );
        })}
    </ul>
  );
}
