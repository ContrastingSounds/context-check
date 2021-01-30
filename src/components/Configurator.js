import React, { useState, useContext } from 'react'

import DemoContext from '../context/DemoContext'

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
  const { setColumnDefs, setData, setFontHeight } = useContext(DemoContext)
  const [columnChoice, setColumnChoice] = useState('A')
  const [dataset, setDataset] = useState('A')
  const [fontChoice, setFontChoice] = useState(10)

  const changeColumnChoice = (event) => {
    setColumnChoice(event.target.value)
    setColumnDefs(columnDefChoices[event.target.value])
  } 

  const changeDataset = (event) => {
    setDataset(event.target.value)
    setData(datasets[event.target.value])
  }

  const changeFontHeight = (event) => {
    const val = parseInt(event.target.value)
    setFontChoice(val)
    setFontHeight(val)
  }

  return (
    <>
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
            <option value="10">10</option>
            <option value="14">14</option>
          </select>
        </label>

      </div>
    </>
  );
}

export default Configurator