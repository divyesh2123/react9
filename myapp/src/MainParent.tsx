import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainParent() {
  return (
    <>
    <ul>
        <li><Link to="/abc">Parent</Link></li>
    </ul>
    <Outlet></Outlet>
    </>
  )
}
