import React, { useContext } from 'react'
import { ILanguageContext, TodoContext } from './language/Language'

export default function Child2() {

   const p = useContext<ILanguageContext|null>(TodoContext);

   console.log(p?.lan.lan);
  return (
    <div>Child2</div>
  )
}
