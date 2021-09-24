import { useState } from "react";

function Feedback() {
    const [value, setValue] = useState('')
    const submit = (e) => {
        e.preventDefault();
        console.log(value)
    }
    return (
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <h1>Feedback Page</h1>
        <p>heres some feedback</p>
        <form onSubmit={(e) => submit(e)}>
            <input 
            value={value} 
            onChange={(e) => {setValue(e.target.value)}} 
            placeholder='was your experience good? Yes or no ...'></input>
            <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Feedback;
  