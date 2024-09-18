import React, { useEffect, useState } from 'react'
import { IPost } from './interface/IPost'
import axios from 'axios';
import PostItem from './PostItem';

export default function Post() {
   const [data,setData]= useState<IPost[]>([]);

   useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(y=>{
        setData(y.data)
    })


   })
  return (
    <div>
        {
            data.map((p:IPost,index:number)=>{

                return (<PostItem d={p} >

                    This is the javascript
                </PostItem>)
            })
        }
    </div>
  )
}

