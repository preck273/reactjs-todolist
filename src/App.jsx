import { useState, useEffect } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"

function App() {

  // Define an array of todo items
//   let todo = [
//     'Got to the gym',
//     'Eat more fruites and vege',
//     'Pick up the kids from school'
// ]

  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  //fuction to save Save the new todo list to localStorage as a JSON string
  function persistData(newList){
    localStorage.setItem('todo', JSON.stringify({todo: newList}))
  }

   // Function to add new todo item
  function addTodo(newTodo) {
    //check if newTodo is empty
    if (!newTodo){
      return
    }

    const newTodoList = [...todo, newTodo]
    persistData(newTodoList)
    setTodo(newTodoList)
  }

  // Function to edit an existing todo item
  function editTodo(index){
    const valueToBeEdited = todo[index]
    setInputValue(valueToBeEdited)
    deleteTodo(index)
  }
 
   // Function to delete a todo item
  function deleteTodo(index){
    const newTodo = todo.filter((todo, todoIndex) =>{
      return todoIndex !=index
    })
    persistData(newTodo)
    setTodo(newTodo)
  }

  // useEffect hook to load todo list from localStorage when the component mounts
  useEffect(() => {
    if (!localStorage){
      return
    }
    let storedData = localStorage.getItem('todo')
    if (storedData){
      let parsedData = JSON.parse(storedData)
      setTodo(parsedData.todo)
    }

  }, [])

  

  return (
    <main>
      <TodoInput inputValue={inputValue} setInputValue=
      {setInputValue} addTodo={addTodo} />
      <TodoList todo ={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
