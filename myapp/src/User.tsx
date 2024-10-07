import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { AppState } from './reducer/rootReducer';

export default function User() {

    const countDispatch = useDispatch<AppDispatch>();

    const { data } = useSelector((state: AppState) => state.user);

    console.log(data);

    useEffect(()=>{

        countDispatch({ type: "UserRequest"});
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            countDispatch({ type: "UserSuc",payload:y });
        }).catch(y=>{
            countDispatch({ type: "UserError",payload:y });
        })
    },[])

  return (
    <div>User</div>
  )
}
