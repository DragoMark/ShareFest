import React, { useEffect, useState } from 'react'
import './Learn.css';
// import User from './User'
import db from '../firebase'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Users (){
    // const [profilePic, setProfilePic] = useState('')
    // const [posts, setPosts] = useState([])
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]); 

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
            <div className="ag-theme-alpine" style={{ height: 600, width:800 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn field="fullname" sortable={ true }></AgGridColumn>
                <AgGridColumn field="phone"></AgGridColumn>
                <AgGridColumn field="email"></AgGridColumn>
            </AgGridReact>
        </div>
        </div>
    )
}

export default Users