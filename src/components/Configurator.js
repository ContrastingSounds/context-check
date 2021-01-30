import React, { useState, useMemo, useContext } from 'react'

import { actions, DemoContext } from '../context/DemoContexts'

import './component.css'

const columnDefChoices = {
  A: [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ],

  B: [
    {headerName: 'Make (edit)', field: 'make', editable: true},
    {headerName: 'Model (edit)', field: 'model', editable: true},
    {headerName: 'Price (edit)', field: 'price', editable: true}
  ]
}

const datasets = {
  A: [
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Toyota", model: "Celica", price: 35000 },
  ],

  B: [
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]
}

const Configurator = (props) => {
  const [context, dispatch] = useContext(DemoContext)

  const [columnChoice, setColumnChoice] = useState('A')
  const [dataset, setDataset] = useState('A')
  const [fontChoice, setFontChoice] = useState(10)


  return useMemo(() => {
    const changeColumnChoice = (event) => {
      setColumnChoice(event.target.value)
      dispatch({
        type: actions.UPDATE_COLUMNS,
        payload: columnDefChoices[event.target.value],
      })
    } 
  
    const changeDataset = (event) => {
      setDataset(event.target.value)
      dispatch({
        type: actions.UPDATE_DATA,
        payload: datasets[event.target.value]
      })
    }
  
    const changeFontHeight = (event) => {
      const value = parseInt(event.target.value)
      setFontChoice(value)
      dispatch({
        type: actions.UPDATE_FONT,
        payload: value
      })
    }

    return <>
      { console.log(Date.now(), 'Configurator()') }
      <div className="demo-component">
        <h3>Configurator</h3>

        <label>
          Pick your column settings:
          <select value={columnChoice} onChange={changeColumnChoice}>
            <option value="A">Read Only</option>
            <option value="B">Editable</option>
          </select>
        </label>

        <label>
          Pick your dataset:
          <select value={dataset} onChange={changeDataset}>
            <option value="A">Ford and Toyota</option>
            <option value="B">Porsche</option>
          </select>
        </label>

        <label>
          Pick your font height:
          <select value={fontChoice} onChange={changeFontHeight}>
            <option value="16">16</option>
            <option value="28">28</option>
          </select>
        </label>

      </div>
    </>
  }, [columnChoice, dataset, fontChoice, dispatch])
}

export default Configurator