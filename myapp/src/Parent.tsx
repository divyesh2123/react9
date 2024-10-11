import React, { useState } from 'react'
import ChildNew from './ChildNew'

export default function Parent() {

    const [data,setData]= useState<string[]>([]);

    const [input,setInput]=useState<string>('');

    const remove= (index:any)=>{

    }
  return (
    <>
    <input type='text' onChange={(e)=>{
        setInput(e.target.value);
    }}/>
    <input type='button' value="save"/>
    <ChildNew remove={remove}></ChildNew>
    </>
  )
}
