import React from 'react'

const DataContext = React.createContext({ 
    data: [],
    counter: 0,

    setData: () => {},
    incrementCounter: () => {},
})

const ConfigContext = React.createContext({ 
    columnDefs: [],
    fontHeight: 12,

    setColumnDefs: () => {},
    setFontHeight: () => {},
})

export { DataContext, ConfigContext }