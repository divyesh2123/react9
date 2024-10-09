import React from 'react'
import { useFetch } from './customhook/useFetch'

export default function UserInfo() {

  const abc  =  useFetch("https://fakestoreapi.com/products");

  console.log(abc.data);
  return (
    <div>{abc.loading}</div>
  )
}
