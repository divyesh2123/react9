import React, { useState } from 'react'
import Child from './Child';
import ChildNew from './ChildNew';

export default function Parent() {

  const [data,setData]= useState<string[]>([]);

  const [input,setInput]= useState<string>('');

  const handleChange = (e:any)=>{
    setInput(e.target.value)
  }

  const removeItem = React.useCallback(()=>{

  },[data]) 

  const handleButton = ()=>{

    let p = [...data];
    p.push(input);
    setData(p);
  }
  return (
    <div>
        <input type='text' onChange={handleChange}/>
        <button onClick={handleButton}>save</button>
        <ChildNew d={data} removeItem={removeItem}/>

    </div>
  )
}
