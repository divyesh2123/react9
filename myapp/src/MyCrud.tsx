import React, { useReducer, useState } from 'react'

enum CountActionKind {
    ADD = 'ADD',
    UPDATE = 'UPDATE',
    DELETE = 'DELETE'
  }

  export interface IE
  { type: CountActionKind;
    payload: string;

  }

export default function MyCrud() {


    const [input,setInput]= useState<string>('');
    const myReducer =(state:string[],action:IE)=>{

        switch(action.type)
        {
            case CountActionKind.ADD:
                let p = [...state];
                p.push(action.payload);
                return p;
            default:
                return state;

        }

        return state;
    }

    const handleChange = (e:any)=>{
        setInput(e.target.value);
    }

    const saveInfo= ()=>{
        
        setData({type:CountActionKind.ADD,payload: input});
    }
    const [data,setData] =  useReducer(myReducer,[])
    console.log(data);
 
  return (
    <div>

            <input type='text' onChange={handleChange}/>

            <input type='button' onClick={saveInfo}/>
    </div>
  )
}
