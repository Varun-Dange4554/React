import  TodoInput  from './Components/TodoInput'

import './App.css'
import TodoList from './Components/TodoList'
import { useState } from 'react'

function App() {
    const [todolist, setTodoList] = useState([])

  

  return (
    <>
    <TodoInput todolist={todolist} setTodoList={setTodoList}/>
    <TodoList todolist={todolist}/>
    </> 
  )
}

export default App






// object
// import React, { useState } from 'react'

// const App = () => {
//     const [num,Setnum]=useState({name:'varun',age:21})

//     const btnclicked =()=>{
//          let newNum = {...num};
//          newNum.name='Aman'
//          console.log('🚀 ~ newNum:', newNum);

//          Setnum(newNum)
//     }




//   return (
//     <div>
//       <button>{num.name} {num.age}</button>
//       <button onClick={btnclicked}> click</button>
//       <br/>

//     </div>
//   )
// }

// export default App






// Array

// import React, { useState } from 'react'

// const App = () => {
   
//   const [arr,setArr]=useState([10,20,30])

//   const btnclicked = ()=>{
         
//     const newarr = [...arr]
//     newarr.push(1001)
//     console.log('🚀 ~ newarr:', newarr);
//     setArr(newarr)

//   }



//   return (
//     <div>
//     <h1>{arr}</h1>
//       <button onClick={btnclicked}> click</button>
//     </div>
//   )
// }

// export default App
