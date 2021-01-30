import React, { useState } from 'react'

const InteractiveWidget = (props) => {

    const [count, setCount] = useState(0);
  
    return (
      <div className="demo-component">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

export default InteractiveWidget