import React, { useContext } from 'react'

import DemoContext from '../context/DemoContext'

const InteractiveWidget = (props) => {
    const context = useContext(DemoContext)
  
    return (
      <>
        { console.log(Date.now(), 'InteractiveWidget()') }
        <div className="demo-component">
          <p>You clicked {context.counter} times</p>
          <button onClick={context.incrementCounter}>
            Click me
          </button>
        </div>
      </>
    );
  }

export default InteractiveWidget