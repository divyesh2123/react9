import React from 'react'

 function ChildNew(props:any) {

    console.log(props);
    console.log("this is render");
  return (
    <div>ChildNew</div>
  )
}

export default React.memo(ChildNew);