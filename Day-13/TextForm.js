import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    console.log("Submit clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UPPER CASE","Success");
  };
  const handelLowerClick = () => {
    console.log("Submit clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lower case","Success");
  };
  const clearText = () => {
    console.log("Submit clicked");
    let newText = ""
    setText(newText);
    props.showalert("Text Cleared","Success");
  };
  const handelInverseText = () => {
    console.log("Submit clicked");
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showalert("Reversed text","Success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here...");

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: 'dark' ? 'white':'black'}}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelUpClick}>
          Submit for UPPERCASE
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelLowerClick}>
          Submit for lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handelInverseText}>
          Submit for Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={speak}>
          Submit for Speech
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearText}>
          Submit to clear text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>Total words: {text.split(/\s+/).filter((element)=>{
          return element.length!==0
        }).length}</p>
        <p>Total charaters: {text.length}</p>
        <p>Total time taken to read: {0.008 * text.split(" ").length} min</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview."}</p>
      </div>
    </>
  );
}
