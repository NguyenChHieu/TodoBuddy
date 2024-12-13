import React from 'react'

export default function Tabs() {
  const tabs = ['All', 'Open', 'Completed']
    // mapping
    return (
      <nav>
        {tabs.map((tab, tabIndex) => {
          return (
            // ensure each tab has a key
            <button key={tabIndex}
            className='tab-button'>
              <h4>{tab} <span>(0)</span></h4>
            </button>
          )
        })}
      </nav>
  )
}
