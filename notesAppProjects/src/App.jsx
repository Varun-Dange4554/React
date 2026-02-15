import React, { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details,setDetails] = useState('')


  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

     if (title.trim() === "" || details.trim() === "") {
    alert("Please fill both Title and Details");
    return;  
  }

    const copytask = [...task];

    copytask.push({title,details})

      setTask(copytask);
    setTitle('')
    setDetails('')
  };

  const deletenote =(idx)=>{
   const copytask = [...task]
  //  console.log(copytask(idx))

   copytask.splice(idx,1)

   setTask(copytask)
  }

  

  return (
    <div className="h-screen lg:flex bg-black text-white  ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 flex-col  items-start m-10 " >

        <h1 className=" text-4xl font-bold">Adds Notes</h1>


        {/* pahila input for header  */}
        <input
          type="text"
          placeholder="Enter your Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e)=>{
             setTitle(e.target.value)
          }}
        />

      {/* deatis value input */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          value={details}
          onChange={(e) =>{
            setDetails(e.target.value)
          }}
        />

        <button className="bg-white   active:scale-95 font-medium w-full outline-none  text-black   rounded">Add Note</button>

      </form>
      <div className="  lg:w-1/2   p-10 lg:border-l">
        <h1 className=" text-4xl font-bold"> Recent Notes</h1>
        <div className=" gap-5 flex flex-wrap mt-5  items-start overflow-auto h-full">
          {task.map(function(elem,idx){

          return <div
  key={idx}
  className=" h-[220px] w-[200px] rounded-2xl text-black py-6 px-4 bg-cover bg-center shadow-lg"
  style={{
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')"
  }}
>
  <div className="flex flex-col justify-between h-full">
    <div>
      <h3 className="leading-tight text-xl font-bold">
        {elem.title}
      </h3>

      <p className="mt-4 leading-tight font-medium text-gray-600">
        {elem.details}
      </p>
    </div>

    <button onClick={()=>{
      deletenote(idx)
    }} className="w-full bg-red-600 py-1 text-xs rounded font-bold text-white hover:bg-red-700 transition">
      Delete
    </button>
  </div>
</div>


          })}
        </div>
      </div>
    </div>
  );
};

export default App;
