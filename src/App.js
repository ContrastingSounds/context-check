import React, { useState } from 'react'

import './App.css';

import Greeting from './components/Greeting'
import Status from './components/Status'
import InteractiveWidget from './components/InteractiveWidget'
import DataTable from './components/DataTable'
import Configurator from './components/Configurator'

import DemoContext from './context/DemoContext'

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
  const [data, setData] = useState(initialState.data)
  const [counter, setCounter] = useState(initialState.counter)
  const [fontHeight, setFontHeight] = useState(initialState.fontHeight)

  const context = {
    columnDefs: columnDefs,
    data: data,
    counter: counter,
    fontHeight: fontHeight,

    setColumnDefs: setColumnDefs,
    setData: setData,
    incrementCounter: () => setCounter(counter + 1),
    setFontHeight: setFontHeight
  }

  return (
    <DemoContext.Provider value={context}>
      { console.log(Date.now(), 'App()') }
      <div className="App">
        <Greeting /> 
        <Status />
        <InteractiveWidget value={context.counter} updater={context.incrementCounter} />
        <DataTable />
        <Configurator />
      </div>
    </DemoContext.Provider>
  );
}

export default App;
