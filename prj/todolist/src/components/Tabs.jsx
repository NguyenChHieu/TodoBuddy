import React from 'react'

export default function Tabs() {
  const tabs = ['All', 'Open', 'Completed']
    return (
      <nav>
        {tabs.map((tab, tabIndex) => {
          return (
            // ensure each tab has a key
            <button key={tabIndex}>
              <h4>{tab}</h4>
            </button>
          )
        })}
      </nav>
  )
}
