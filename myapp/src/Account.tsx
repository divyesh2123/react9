import axios from 'axios'
import React from 'react'

export default function Account() {

    let p = localStorage.getItem("token")

    axios.get("http://localhost:4000/accounts",{
        headers: {
            'Authorization' : `Bearer ${p}`
        }
    }).then(y=>{
        console.table(y.data);
    })
  return (
    <div>Account</div>
  )
}
