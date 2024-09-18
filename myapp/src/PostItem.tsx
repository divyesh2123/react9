import React from 'react'
import { IPost } from './interface/IPost'

export interface ICommon
{
  i:number
}

export interface IPostPageProps extends ICommon
{
  d:  IPost;
  children : React.ReactNode;
}

export default function PostItem(p:IPostPageProps) {
  
  return (
    <>
    {p.children}
    <tr>
      
     <td> {p.d.body} </td>
    
     <td> {p.d.title} </td>
      <td>{p.i}</td>
     </tr>
     </>
  )
}
PostItem.defaultProps  = {
  i :0
}