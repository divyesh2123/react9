import React, { FormEvent, useState } from 'react'
import { ILogin } from './interface/ILogin'

export default function Login() {

 const [data,setData]  =  useState<ILogin>({email: "",password:""});
 
 const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(data);

 }

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data,[event.target.name]: event.target.value})
  };
 return (
    <div>
        <form onSubmit={handleSubmit}>


                <input type='text' name="email" onChange={handleChange}/>
                <input type='password' name="password" onChange={handleChange}/>

                <input type='submit' value="save"/>
        </form>

    </div>
  )
}
