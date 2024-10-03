import React, { useState } from 'react';
import data, { IEmployee } from './data';

export const Home = () => {

   const [counter,setCounter] =  useState<number>(0)

    const inc =(e:any)=>{

       setCounter(counter+1);
    }
  return (
    <div>{counter}
    <button onClick={inc}>+</button>

    {
        data.map((v:IEmployee)=>{
            return(<div key={v.Id}>{v.Id} {v.Name}  </div>)
        })
    }
    
    </div>
  )
}
