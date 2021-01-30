import React, { useContext } from 'react'

import { ConfigContext, DataContext } from '../context/DemoContexts'

const Status = (props) => {
  const [configContext, dispatchConfig] = useContext(ConfigContext);
  const [dataContext, dispatchData] = useContext(DataContext);
    
  return (
    <>
      { console.log(Date.now(), 'Status()') }
      <div className="demo-component" style={{ fontSize: configContext.fontHeight }}>
        <h3>Status</h3>
        <div>Clicks: {dataContext.counter}</div>
        <hr></hr>
        <div>Columns: {JSON.stringify(configContext.columnDefs)}</div>
        <div>Data: {JSON.stringify(dataContext.data)}</div>
        <div>Counter: {dataContext.counter}</div>
        <div>Font Height: {configContext.fontHeight}</div>
      </div>
    </>
  );
}

export default Status