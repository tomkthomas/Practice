import { useEffect, useState } from "react";

export default function TabSwitch() {

  const [name,setName] = useState('')
  const [submit,setSubmit] = useState(false)
  const [count,setCount] = useState(0)

  const tabSwitch =()=>{
    console.log('inside')
    setCount(count => count + 1 )
  }

  useEffect(() =>{
    window.addEventListener('blur',tabSwitch)
    return ()=> window.removeEventListener('blur',tabSwitch)
  })
  const handleReset = ()=>{
    setName('')
  }
  if(submit) 
    return (<div>
      {name? name : "Field Empty!!"}
    </div>)
  return (
    <>
    <form onSubmit={()=>setSubmit(true)} onReset={handleReset}>
      <label>Name: </label>
      <input type='text' value = {name} onChange = {e => setName(e.target.value)}/>
      <input type='submit' value= 'Submit'></input>
      <input type='reset' value='Reset' />
    </form>
    <div>Tab count: {count}</div>
    </>
  );
}