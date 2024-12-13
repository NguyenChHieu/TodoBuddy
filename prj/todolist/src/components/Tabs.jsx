import React from 'react'

export default function Tabs(props) {
  const {todos} = props
  const tabs = ['All', 'Open', 'Completed']
    // mapping
    return (
      <nav>
        {tabs.map((tab, tabIndex) => {

          const numOfTasks = tab ==='All' ?
            todos.length :
            tab === 'Open' ?
              todos.filter(val => !val.complete).length : 
              todos.filter(val => val.complete).length

          return (
            // ensure each tab has a key
            <button key={tabIndex}
            className='tab-button'>
              <h4>{tab} <span>({numOfTasks})</span></h4>
            </button>
          )
        })}
      </nav>
  )
}
