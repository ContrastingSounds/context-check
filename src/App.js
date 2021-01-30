import React, { useState } from 'react'

import './App.css';

import Greeting from './components/Greeting'
import Status from './components/Status'
import WidgetWithContext from './components/WidgetWithContext'
import WidgetWithProps from './components/WidgetWithProps'
import DataTable from './components/DataTable'
import Configurator from './components/Configurator'

import { DataContext, ConfigContext } from './context/DemoContext'


const initialState = {
  columnDefs: [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true }
  ],
  data: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
  ],
  counter: 0,
  fontHeight: 16
}

function App() {
  const [columnDefs, setColumnDefs] = useState(initialState.columnDefs)
  const [fontHeight, setFontHeight] = useState(initialState.fontHeight)
  
  const [data, setData] = useState(initialState.data)
  const [counter, setCounter] = useState(initialState.counter)

  const configContext = {
    columnDefs: columnDefs,
    fontHeight: fontHeight,

    setColumnDefs: setColumnDefs,
    setFontHeight: setFontHeight
  }

  const dataContext = {
    data: data,
    counter: counter,

    setData: setData,
    incrementCounter: () => setCounter(counter + 1),
  }

  return (
    <ConfigContext.Provider value={configContext}>
      <DataContext.Provider value={dataContext}>
        { console.log(Date.now(), 'App()') }
        <div className="App">
          <Greeting /> 
          <Status />
          <div className="flex-row">
            <WidgetWithProps value={dataContext.counter} updater={dataContext.incrementCounter} />
            <WidgetWithContext />
          </div>
          <div className="flex-row">
            <DataTable />
            <Configurator />
          </div>
        </div>
      </DataContext.Provider>
    </ConfigContext.Provider>
  );
}

export default App;
