import { useState } from "react";


const App = () =>{
    
  const [title,setTitle]=useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log("from submit by", title);
    setTitle('')
     
  }


  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <input type="text" 
      placeholder="Enter your name"
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
     />
      
      <button >Sumbit</button>
    </form>
    
    </div>
  )

}
export default App