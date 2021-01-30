import React, { useContext } from 'react'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import DemoContext from '../context/DemoContext'

const DataTable = (props) => {
    const { columnDefs, data } = useContext(DemoContext)

    return (
      <>
        { console.log(Date.now(), 'DataTable()') }
        <div className="demo-component">
          <h3>DataTable</h3>
          <div className="ag-theme-alpine" style={{ height: 200, width: 600 }}>
            <AgGridReact 
              columnDefs={columnDefs}
              rowData={data}
            />
          </div>
        </div>
      </>
    );
  }

export default DataTable