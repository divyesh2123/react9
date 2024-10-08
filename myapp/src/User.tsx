import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store/store';
import { AppState } from './reducer/rootReducer';
import { fetchUserData } from './action/userAsyncAction';

export default function User() {

    const countDispatch = useDispatch<AppDispatch>();

    const { data } = useSelector((state: AppState) => state.user);

    console.log(data);

    useEffect(()=>{

        countDispatch(fetchUserData());
       
    },[])

  return (
    <div>User</div>
  )
}
