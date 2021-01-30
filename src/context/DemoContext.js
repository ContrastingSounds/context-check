import React from 'react'

const DemoContext = React.createContext({ 
    columnDefs: [],
    data: [],
    counter: 0,
    fontHeight: 12,

    setColumnDefs: () => {},
    setData: () => {},
    incrementCounter: () => {},
    setFontHeight: () => {},
})

export default DemoContext