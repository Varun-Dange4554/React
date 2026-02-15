import React from 'react'

const App = () => {
  // localStorage.setItem('location','Mumbai');
  // const key=localStorage.getItem('location')
  // console.log('🚀 ~ key:', key);
  // localStorage.clear()


  //  const user ={
  //   name:"varun",
  //   age:23,
  //   Location:"Mumbai"
  //  }

  //  console.log(user)

  //  localStorage.setItem("user",JSON.stringify(user))


  const user = JSON.parse(localStorage.getItem('user'))
  console.log('🚀 ~ user:', user);

  // const arr = [11,22,33,45]
  // console.log('🚀 ~ arr:', arr);

  // localStorage.setItem('arr',JSON.stringify(arr))

  const arr1 = JSON.parse(localStorage.getItem('arr'))
  console.log('🚀 ~ arr1:', arr1);

  return (
    <div>
      
    </div>
  )
}

export default App
