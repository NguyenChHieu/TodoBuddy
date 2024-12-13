import React from 'react'

export default function Header(props) {
  const {todos} = props
  const todosLength = todos.length

  const isTasksPlural = todosLength != 1
  const tasksOrTasks = isTasksPlural ? 'tasks' : 'task'

  return (
    <header>
        <h1 className='text-gradient'>You have {todosLength} open {tasksOrTasks}.</h1>
    </header>
  )
}
