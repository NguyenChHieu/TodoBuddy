import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]


  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])
  const [selectedTab, setSelectedTab] = useState('Open')

function handleAddTodo(newTodo){
  const newTodoList = [...todos, {input: newTodo, complete: false}]
  setTodos(newTodoList)
  handleSaveData(newTodoList)
}

function handleDeleteTodo(index){
  let newTodoList = todos.filter((val, i) => {
    return i !== index
  })
  setTodos(newTodoList)
  handleSaveData(newTodoList)
}

// modify
function handleCompleteTodo(index){
  let newTodoList = [...todos]
  let completedTodo = todos[index]
  completedTodo.complete = true
  newTodoList[index] = completedTodo
  setTodos(newTodoList)
  handleSaveData(newTodoList)
}

useEffect(() => {
  if (!localStorage || localStorage.getItem('todo-app')) {return}
  let db = JSON.parse(localStorage.getItem('todo-app'))
  setTodos(db.todos)
}, [todos])

function handleSaveData(currTodos){
  localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
}

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} 
      setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList 
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo} 
        selectedTab={selectedTab} 
        todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
