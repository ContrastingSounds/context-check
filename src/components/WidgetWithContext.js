import React, { useMemo, useContext } from 'react'

import { DataContext } from '../context/DemoContext'

const WidgetWithContext = (props) => {
  const { counter, incrementCounter } = useContext(DataContext)

  return useMemo(() => {
    return <>
      { console.log(Date.now(), 'WidgetWithContext()') }
      <div className="demo-component">
        <p>You clicked {counter} times</p>
        <button onClick={incrementCounter}>
          Click me
        </button>
      </div>
    </>
  }, [counter, incrementCounter])
}


export default WidgetWithContext