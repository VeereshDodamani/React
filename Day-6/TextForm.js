import React, { useState } from "react";

export default function TextForm(props) {
    const handelUpClick = ()=>{
          console.log("Submit clicked")
          setText("Clicked on handleupCase")
    }
    const handleOnChange = (event)=>{
          console.log("OnChange")
          setText(event.target.value)
    }


  const [text, setText] = useState('Enter text here...');
  
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick}>Submit</button>
    </div>
  );
}
