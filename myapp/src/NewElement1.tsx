import React from 'react'
import { useParams } from 'react-router-dom'

export default function NewElement1() {

    const p = useParams();

    console.log(p.id1);
  return (
    <div>NewElement1</div>
  )
}
