import { Fragment, React, useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import LoadingScreen from 'loading-screen-kraenau';
import { useHistory } from 'react-router';

const TableCustomers = () => {

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);
    const history = useHistory();
    useEffect(() => {
        axios.get(`https://blazeproject.herokuapp.com/api/customers`)
            .then(res => {
                setRowData(res.data)
            })
    }, [])


    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const changeView = () =>{
        history.push('/addCustomer')
    }

    return (
        <Fragment>
            {
                rowData === null ? (
                    <LoadingScreen></LoadingScreen>
                ) : (
                    <div className="center">
                        <div className="ag-theme-alpine" style={{ height: 550, width: 1050 }}>
                            <button onClick={()=>changeView()}>Add customer</button>
                            {
                                <AgGridReact
                                    onGridReady={onGridReady}
                                    rowData={rowData.payload}
                                    paginationPageSize={rowData.customersPerPage}
                                    pagination={true}>
                                    <AgGridColumn field="id"></AgGridColumn>
                                    <AgGridColumn field="firtsName"></AgGridColumn>
                                    <AgGridColumn field="lastName"></AgGridColumn>
                                    <AgGridColumn field="email"></AgGridColumn>
                                    <AgGridColumn field="phoneNumber"></AgGridColumn>
                                </AgGridReact>

                            }
                        </div>
                    </div>

                )
            }
        </Fragment>
    );
}

export default TableCustomers;