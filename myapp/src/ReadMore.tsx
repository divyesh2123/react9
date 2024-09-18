import React, { useState } from 'react'


interface IReamore
{
    props: string
}

export default function ReadMore(props:IReamore) {

    const [isReadMore,setReadMore]= useState(true);

    const p = React.useMemo(()=>{
        console.log("D");
        return props.props.slice(0,20).concat('...readMore');
    },[props.props])

   
  return (
    <div onClick={()=>{
        setReadMore(!isReadMore);
    }}>
        
        {isReadMore ? p :props.props }
    </div>
  )
}
