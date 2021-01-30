import React, { useMemo, useContext } from 'react'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { ConfigContext, DataContext } from '../context/DemoContexts'

const DataTable = (props) => {
  const [{ columnDefs }] = useContext(ConfigContext)
  const [{ data }] = useContext(DataContext)

    return useMemo(() => {
      return <>
        { console.log(Date.now(), 'DataTable()') }
        <div className="demo-component">
          <h3>DataTable</h3>
          <div className="ag-theme-alpine" style={{ height: 135, width: 600 }}>
            <AgGridReact 
              columnDefs={columnDefs}
              rowData={data}
            />
          </div>
        </div>
      </>
    }, [columnDefs, data])
  }

export default DataTable