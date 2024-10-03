import React, { useRef } from 'react'
import a from './video.mp4';

export default function UncontrolledForm() {

    console.log("d");

    const ref1= useRef<HTMLInputElement>(null);

    const save = ()=>{

       
    }

  return (
    <div>
        <video controls src={a}></video>
        <input type='text' name="abc" ref={ref1}/>
        <input type='button' onClick={save}/>
    </div>
  )
}
