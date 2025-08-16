// import './App.css';

import { useState } from "react";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

// JSX: JSX is basicly HTML itself
// But some of the words are reserved in JSX like for, class cannot be used
// Babel compiles the entire JSX


let name = "Veeresh";
const element = <h1>Hello, {name}</h1>;
console.log(element)
function App() {
  const [mode, setmode] = useState('white')

  const toggleMode =() => {
    if (mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor= 'white';
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText="About"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter your heading here..." mode={mode}/>
      </div>
      {/* <About mode={mode}></About> */}
    </>
  );
}

export default App;
