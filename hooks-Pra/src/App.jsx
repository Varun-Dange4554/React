import React,{useState} from "react";

export const App = () =>{

  const [count,setCount]=useState(0)
  const [name,setName]=useState("")
  


   function  increment() {
    setCount(count+1)
    
  }

  return (
   <>
    <div>
    <input type="text" onChange={e => setName(e.target.value)} />
    <h1>
      {name} has clicked {count} times!!!
    </h1>
      <button onClick={increment}>Inc</button>
      <button onClick={() => setCount(count-1)}>Dec</button>
    </div>
    <>
      <h1>
        counts:{count}
      </h1>
    </>
   </>

  )
} 