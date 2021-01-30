import React from 'react'

const WidgetWithProps = React.memo(
  ({ value, updater }) => {
    return <>
      { console.log(Date.now(), 'WidgetWithProps()') }
      <div className="demo-component">
        <p>You clicked {value} times</p>
        <button onClick={updater}>
          Click me
        </button>
      </div>
    </>
  }, (prevProps, nextProps) => prevProps.value === nextProps.value ? true : false
)

export default WidgetWithProps