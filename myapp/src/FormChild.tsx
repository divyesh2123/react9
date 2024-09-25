import React, { useEffect, useState } from 'react'
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
  setarr: Function
  arr: any[]
  id: number
  setId:Function
}

export default function FormChild(props : IFormChildPage) {

  useEffect(()=>
  {
    if(props.id>0)
    {
      let p = props.arr.find((v:any)=>{

        return v.id == props.id;
      });
      setData({...p});
    }
    else
    {
      setData({firstName:"",lastName:""})
    }


  },[props.id,props.open]);

  const [data,setData]= useState({
    firstName : "",
    lastName : ""
  })

  const hanleChange = (e:any)=>{

    setData({...data,[e.target.name]:e.target.value })
  }

  const saveInfo= ()=>{

    let p = [...props.arr];

    if(props.id <=0)
    {
      p.push({...data,id:props.arr.length+1});

    }
    else
    {
      let u = p.find((v:any)=>{

        return v.id == props.id;
      })
      u.firstName = data.firstName;
      u.lastName = data.lastName
    }
   
    props.setarr(p);
    props.setId(-1);
    
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
        value={data.firstName}
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
        value={data.lastName}
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
