import React, { useEffect, useState } from 'react'

export default function Pagination() {

    const [page,setpage]= useState<number>(1);
    const [pageSize,setPageSize]= useState<number>(10);
    const [data,setData]= useState<any[]>([]);


    const paginaton = ()=>{

        let p =[];
        for(let i=1;i< Math.ceil(data.length/pageSize);i++)
        {
            p.push(i);
        }

        return p;

    }

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts").then(y=>y.json())
        .then(y=>{
            setData(y);
        })

    },[])
  return (
    <div>
        {
        data.slice((page-1)*pageSize,((page-1)*pageSize)+pageSize).map((v:any)=>{

            return (<div>{v.id} {v.title}</div>)
        })

        }

        {
            paginaton().map((t:any)=>{

                return (<button onClick={()=>{
                    setpage(t);
                }}>{t}</button>)

            })

        }
    </div>
  )
}
