import React, { useMemo, useContext } from 'react'

import { actions, DemoContext } from '../context/DemoContexts'

const WidgetWithContext = (props) => {
  const [{ counter }, dispatch] = useContext(DemoContext)

  return useMemo(() => {

    const handleClick = () => {
      dispatch({ type: actions.INCREMENT_COUNTER })
    }

    return <>
      { console.log(Date.now(), 'WidgetWithContext()') }
      <div className="demo-component">
        <p>You clicked {counter} times</p>
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
    </>
  }, [counter, dispatch])
}

export default WidgetWithContext
