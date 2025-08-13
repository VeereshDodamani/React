import React, { useState } from "react";

export default function TextForm(props) {
    const handelUpClick = ()=>{
          console.log("Submit clicked")
          let newText = text.toUpperCase();
          setText(newText)
    }
    const handelLowerClick = ()=>{
          console.log("Submit clicked")
          let newText = text.toLowerCase();
          setText(newText)
    }
    const handleOnChange = (event)=>{
          console.log("OnChange")
          setText(event.target.value)
    }


  const [text, setText] = useState('Enter text here...');
  
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>Submit for UPPERCASE</button>
      <button className="btn btn-primary" onClick={handelLowerClick}>Submit for lowercase</button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>Total words: {text.split(" ").length}</p>
      <p>Total charaters: {text.length}</p>
      <p>Total time taken to read: {0.008*text.split(" ").length} min</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
