import React, {useState} from 'react';
import './App.css';

function Input() {

  const [inputvalue, setInputValue] = useState(" ");
  return (
  
    <div className='main'>
      <div>
  <h1> To D0 List</h1>
      </div>
      
    <div>
    <input
      type = "text"
      value = {inputvalue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Enter task here'
      
      />
      <button>Add </button>
      
    </div>
      
    </div>
  )
}

export default Input;
