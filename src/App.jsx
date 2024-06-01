import { useState } from 'react'



function App() {
  const [color,setColor]=useState("red")

  return (
    <div className='w-screen h-screen duration-200'
   style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-10'>
      <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-white px-10 py-3 rounded-3xl'>

        <button 
        onClick={()=>{setColor("red")}}
        className=' outline-none px-5 py-1.5 rounded-2xl text-white shadow-xl'
        style={{backgroundColor:"red"}}>Red</button>

        <button onClick={()=>{setColor("black")}}
        className=' outline-none px-4 rounded-2xl text-white py-1.5 shadow-xl'
        style={{backgroundColor:"black"}}>black</button>

        <button onClick={()=>{setColor("green")}}
        className=' outline-none px-4 rounded-2xl text-white py-1.5 shadow-xl'
        style={{backgroundColor:"green"}}>green</button>

        <button onClick={()=>{setColor("white")}}
        className='px-4 rounded-2xl border-2 border-black py-1.5 shadow-xl'
        style={{backgroundColor:"white"}}>White</button>

        <button onClick={()=>{setColor("blue")}}
        className=' outline-none px-4 rounded-2xl text-white py-1.5 shadow-xl'
        style={{backgroundColor:"blue"}}>Blue</button>

        <button onClick={()=>{setColor("brown")}}
        className=' outline-none px-4 rounded-2xl text-white py-1.5 shadow-xl'
        style={{backgroundColor:"brown"}}>Brown</button>

        <button onClick={()=>{setColor("yellow")}}
        className=' outline-none px-4 rounded-2xl py-1.5 shadow-xl'
        style={{backgroundColor:"yellow"}}>Yellow</button>
      </div>
    </div>
   </div>
  
  )
}

export default App
