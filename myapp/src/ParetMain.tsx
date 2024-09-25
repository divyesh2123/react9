import React, { useState } from 'react'
import FormChild from './FormChild'
import DisplayGrid from './DisplayGrid'
import { Button } from '@mui/material'

export default function ParetMain() {

    const [open,setOpen]= useState<boolean>(false);
    const [arr,setarr]= useState<any[]>([]);
    const [id,setId] = useState<number>(-1);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleEdit = (id:number)=>{

        setId(id);
        setOpen(true);

      }

      const deletInfo = (id:number)=>{

        let a = [...arr];
        let removednewarray= a.filter((v)=>{

          return v.id !=id;
        })
        setarr(removednewarray);

      }

      
  return (
    <>
        <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
        <FormChild handleClose={handleClose} 
        open={open} 
        arr={arr}
        setarr={setarr} 
        id={id}
        setId= {setId}
         
         />
        <DisplayGrid data={arr} deletInfo={deletInfo} handleEdit={handleEdit}/>
    </>
  )
}
