import React, { useEffect, useState } from 'react'
import './Users.css';
import db from '../firebase'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Users (){
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]); 
    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:300,
            headerClassName: 'super-app-theme--header'
        },
        {
            field:'fullname',
            headerName:'Full Name',
            sortable:true,
            width:200,
        },
        {
            field:'phone',
            headerName:'Phone',
            width:200,
        },
        {
            field:'email',
            headerName:'Email',
            width:250,
        }
    ];
    const useStyles = makeStyles({
        root: {
          '& .super-app-theme--header': {
            fontWeight: 'bold',
          },
        },
      });
    const classes = useStyles();
    useEffect(() => {
        db.database().ref('Users')
        .on('value', (snapshot) =>{
            let docs = []
            snapshot.forEach(child => {
                docs.push(child)
            })
            setRowData(docs.map(doc => ({ id:doc.key, fullname:doc.val().fullname,phone:doc.val().phone,email:doc.val().email })))
            console.log(docs);
            console.log(snapshot);
            console.log(snapshot.val())
        })
    },[])

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    return (
        <div className='feed' >
            {/* <div className="ag-theme-alpine" style={{ height: 400, width:800 }}> */}
            {/* <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="fullname" sortable={ true }></AgGridColumn>
                <AgGridColumn field="phone"></AgGridColumn>
                <AgGridColumn field="email"></AgGridColumn>
            </AgGridReact> */}
            <div style={{ height:800, width: '100%', backgroundColor:'white'}}>
                <DataGrid rows={rowData} columns={columns} className={classes.root} pageSize={10} />
            </div>
        {/* </div> */}
        </div>
    )
}

export default Users