import React, { useMemo, useContext } from 'react'

import { actions, DataContext } from '../context/DemoContexts'

const WidgetWithProps = (props) => {
  const [dataState, dispatchData] = useContext(DataContext)

  return useMemo(() => {

    const handleClick = () => {
      dispatchData({ type: actions.INCREMENT_COUNTER })
    }

    return <>
      { console.log(Date.now(), 'WidgetWithContext()') }
      <div className="demo-component">
        <p>You clicked {dataState.counter} times</p>
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
    </>
  }, [dataState.counter, dispatchData])
}

export default WidgetWithProps
