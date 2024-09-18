import axios from 'axios'
import React from 'react'
import authFetch from './axiosbase/interseptor';

export default function Account() {

    

    authFetch.get("accounts").then(y=>{
        console.table(y.data);
    })
  return (
    <div>Account</div>
  )
}
