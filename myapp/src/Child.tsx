import React from 'react'

 function Child(props:any) {
  console.log("this is called again");
  return (
    <div>Child</div>
  )
}

export default React.memo(Child, (pre,current)=>{

  return pre.d.length== current.d.length;
});
