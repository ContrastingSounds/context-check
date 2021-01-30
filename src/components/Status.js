import React, { useContext } from 'react'

import { DemoContext } from '../context/DemoContexts'

const Status = (props) => {
  const [{ counter, columnDefs, data, fontHeight}] = useContext(DemoContext);
    
  return (
    <>
      { console.log(Date.now(), 'Status()') }
      <div className="demo-component" style={{ fontSize: fontHeight }}>
        <h3>Status</h3>
        <div>Clicks: {counter}</div>
        <hr></hr>
        <div>Columns: {JSON.stringify(columnDefs)}</div>
        <div>Data: {JSON.stringify(data)}</div>
        <div>Counter: {counter}</div>
        <div>Font Height: {fontHeight}</div>
      </div>
    </>
  );
}

export default Status