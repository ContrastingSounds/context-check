import React, { useReducer } from 'react'

import './App.css';

import Greeting from './components/Greeting'
import Status from './components/Status'
import WidgetWithContext from './components/WidgetWithContext'
import DataTable from './components/DataTable'
import Configurator from './components/Configurator'

import { contextReducer, DemoContext } from './context/DemoContexts'

const initialState = {
  columnDefs: [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true }
  ],
  fontHeight: 16,

  data: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
  ],
  counter: 0,
}

function App() {
  const [context, dispatch] = useReducer(contextReducer, initialState)

  return (
    <DemoContext.Provider value={ [context, dispatch] }>
      { console.log(Date.now(), 'App()') }
      <div className="App">
        <Greeting /> 
        <Status />
        <WidgetWithContext />
        <div className="flex-row">
          <DataTable />
          <Configurator />
        </div>
      </div>
    </DemoContext.Provider>
  );
}

export default App;
