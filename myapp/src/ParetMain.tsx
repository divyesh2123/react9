import React, { useState } from 'react'
import FormChild from './FormChild'
import DisplayGrid from './DisplayGrid'
import { Button } from '@mui/material'

export default function ParetMain() {

    const [open,setOpen]= useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <FormChild handleClose={handleClose} open={open}/>
        <DisplayGrid/>
    </>
  )
}
