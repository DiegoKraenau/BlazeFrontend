import { React, useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const TableCustomers = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/customers`)
            .then(res => {
                console.log(res.data.payload)
                setRowData(res.data.payload)
            })
    }, [])


    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="firtsName"></AgGridColumn>
                <AgGridColumn field="lastName"></AgGridColumn>
            </AgGridReact>
        </div>
    );
}

export default TableCustomers;