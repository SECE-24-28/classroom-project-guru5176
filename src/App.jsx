import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { useState } from 'react'
function App() {
  // useState -> [varible_name, setterFunction] = useState(Default_Value); helps to save and change states in our app. 
  const [count, setCount] = useState(0); 
  const [user, setUser] = useState('Guest');
  const [uname, setUname] = useState("");
  function changeName() {
    setUser(uname);
    setUname('');
  }

  // const [data, setData] = useState([{
  //   name: "",
  //   email: "",
  //   rollno: "",
  // }]);
  
  // setData([...names, {"name": "Any name", email: "Any email", roll: "12"}]);

  // setBooks({...books, "bookName": "Lord of the Rings"});

  return (
    // data.map((card)=>{
      // <div key=card.id>
      //   <div>card.name</div>
      //   <div>card.email</div>
      //   <div>card.roll</div>
      // </div>
    // })
    // JSX fragment <></>
    // Hooks(eg. useState): prebuilt functions and methods that is provided to us by react to develop our app seamlesly.
    <>
      <Navbar user={user}/>
      <About count={count}/>
      <h1>Hello world</h1>
      <div className='flex justify-center items-center gap-5'>
        <span className='text-2xl'>{count}</span>
        <button className="border px-5 py-3 rounded-4xl hover:bg-blue-400 hover:text-white transition select-none" onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <div>
        <span className='text-2xl'>User: {user}</span>
        <button className="border px-5 py-3 rounded-4xl hover:bg-blue-400 hover:text-white transition select-none" onClick={()=>{setUser('Bruce Wayne')}}>Change Name</button>
      </div>
      {/* Interpolation - { javascript } */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi perspiciatis, illo deleniti ut expedita cupiditate cumque nam minus provident placeat repudiandae voluptatem. Quasi minima dolorem illum nisi dolore laudantium.</p>


      <div className='flex justify-center gap-4'>
        <input type="text" value={uname} name="" id="" className='input' placeholder='Enter Name' onChange={(e) => setUname(e.target.value)} />
        <button className='btn' onClick={() => { changeName() }}>Change Name</button>
      </div>

    </>
  )
}

export default App
