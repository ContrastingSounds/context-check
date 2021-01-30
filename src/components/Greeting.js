import React from 'react'

import './component.css'

const Greeting = React.memo(
  (props) => {  
    return (
      <>
        { console.log(Date.now(), 'Greeting()') }
        <div className="demo-component">
          <h3>Greeting</h3>
          <p>
            "Static" component
          </p>
        </div>
      </>
    );
  }
)

export default Greeting