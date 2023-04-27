import React from 'react';
import { useState } from 'react';
import Form from "./components/Form.jsx"

const App = () => {
  const [name, setName] = useState("Prince Ndukwe");
  const [job, setJob] = useState("Software Engineer")

  const changeDetails = () => {
    setName("Grace Okengwu");
    setJob("Doctor");
  }
  const [count, setCount] = useState(40);

  const increase = () =>{
   setCount(count +1);
  }
const decrease = () =>{
    setCount ( count -1);
  }

const reset = () =>{
    setCount( 0);
  }
  
  return (
    <>
    
    
    <p>Hello my name is {name}. I'm a {job}.</p>

    <button onClick={changeDetails}> Click to update</button>
    
    <h1 className='mt-4'>Count: {count}</h1>
    <button className='btn btn-success' onClick={increase}>Increase</button><button className='btn btn-secondary m-2' onClick={reset}>Reset</button><button className='btn btn-danger' onClick={decrease}>Decrease</button>

<Form />


    </>
  )
}

export default App