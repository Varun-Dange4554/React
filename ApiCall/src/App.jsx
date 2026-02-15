// import axios from 'axios';
// import { useState } from 'react';

// const App = () => {

//   const[data,setData]=useState([])


//   // async await

//   //  const getData = async()=>{
//   //  const res= await fetch('https://jsonplaceholder.typicode.com/todos')
//   //  const data = await res.json()
//   //  console.log('🚀 ~ data:', data);
//   //  }



//   // .then .catch method

//   // const getData = ()=>{
//   //   fetch('https://jsonplaceholder.typicode.com/todos')
//   //   .then((res) => res.json())
//   //   .then((data)=>{
//   //   console.log('🚀 ~ data:', data);
//   //   })
//   //   .catch((err)=>{
//   //     console.log(err)
//   //   })
//   // }


//   // axios method

//   const getData = async () => {
   
//    const res = await  axios.get('https://picsum.photos/v2/list')
     
//    setData(res.data)
//   }
  
   

//   return (
//     <>
//      <div className="container">
//       <button className="fetch-btn" onClick={getData}>
//         Fetch Images
//       </button>

//       <div className="card-container">
//         {data.map((elem, idx) => (
//           <div className="card" key={idx}>
//             <img
//               src={elem.download_url}
//               alt={elem.author}
//               className="card-img"
//             />
//             <div className="card-body">
//               <h3>{elem.author}</h3>
//               <p>Image ID: {elem.id}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
      
//     </>
//   )
// }

// export default App



// GET Request (Fetch Data) 
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default App;

//GET with Async/Await (Best Practice)


