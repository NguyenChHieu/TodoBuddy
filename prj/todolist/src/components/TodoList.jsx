import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const { todos } = props
  const tab = 'All'
  const filterTodoList = tab === 'All' ? 
      todos : tab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete)

  return (
    <>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard 
            key={todoIndex} 
            todoIndex={todoIndex} 
            todo={todo}/>
        )
        
        })}
      
    </>)
}
