import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IFormChildPage
{
  open: boolean,
  handleClose: Function
}

export default function FormChild(props : IFormChildPage) {

  const [data,setData]= useState({
    firstName : "",
    lastName : ""
  })

  const hanleChange = (e:any)=>{

    setData({...data,[e.target.name]:e.target.value })
  }

  const saveInfo= ()=>{

    console.log(data);
    props.handleClose();
  }
  return (
    <Dialog
    open={props.open}
    onClose={()=>{props.handleClose()}}
  
  
  >
    <DialogTitle>Add/Edit Employee</DialogTitle>
    <DialogContent>
   
     
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="first Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={hanleChange}
      />

<TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        fullWidth
        variant="standard"
        onChange={hanleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>{props.handleClose()}}>Cancel</Button>
      <Button type="button" onClick={saveInfo}>Subscribe</Button>
    </DialogActions>
  </Dialog>
  )
}
