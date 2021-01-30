import React, { useReducer } from 'react'

import './App.css';

import Greeting from './components/Greeting'
import Status from './components/Status'
import WidgetWithContext from './components/WidgetWithContext'
import DataTable from './components/DataTable'
import Configurator from './components/Configurator'

import { ConfigContext, configReducer, DataContext, dataReducer } from './context/DemoContexts'

const initialConfig = {
  columnDefs: [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true }
  ],
  fontHeight: 16,
}

const initialData = {
  data: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
  ],
  counter: 0,
}

function App() {
  const [configState, configDispatch] = useReducer(configReducer, initialConfig)
  const [dataState, dataDispatch] = useReducer(dataReducer, initialData)

  return (
    <ConfigContext.Provider value={ [configState, configDispatch] }>
      <DataContext.Provider value={ [dataState, dataDispatch] }>
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
      </DataContext.Provider>
    </ConfigContext.Provider>
  );
}

export default App;
