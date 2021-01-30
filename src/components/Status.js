import React, { useContext } from 'react'

import DemoContext from '../context/DemoContext'

const Status = (props) => {
    const context = useContext(DemoContext)
    
    return (
      <>
        { console.log(Date.now(), 'Status()') }
        <div className="demo-component">
          <h3>Status</h3>
          <div>Clicks: {context.counter}</div>
          <hr></hr>
          <div>Columns: {JSON.stringify(context.columnDefs)}</div>
          <div>Data: {JSON.stringify(context.data)}</div>
          <div>Counter: {context.counter}</div>
          <div>Font Height: {context.fontHeight}</div>
        </div>
      </>
    );
  }

export default Status