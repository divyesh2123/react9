import { Button } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'


interface IGrid
{
    data: any[];
    deletInfo:Function;
    handleEdit:Function;
}

export default function DisplayGrid(p:IGrid) {

    const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    {field:'',headerName:'action',width: 350, renderCell: (params: GridRenderCellParams)=>{
      
      return (
<>
        <Button onClick={()=>{
          p.deletInfo(params.row.id);
        }}>Delete</Button>
        <Button onClick={()=>{

p.handleEdit(params.row.id);
        }}>Edit</Button>
        </>
      )
    }}
  ];

  return (
    <DataGrid rows={p.data} columns={columns} />
  )
}
