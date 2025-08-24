// import './App.css';

import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
 
// JSX: JSX is basicly HTML itself
// But some of the words are reserved in JSX like for, class cannot be used
// Babel compiles the entire JSX


let name = "Veeresh";
const element = <h1>Hello, {name}</h1>;
console.log(element)
function App() {
  const [mode, setmode] = useState('white')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) =>{
    setalert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggleMode =() => {
    if (mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor= 'white';
      showalert("Light  Mode Activated....","Success");
      document.title = 'Light Mode'
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark Mode Activated....","Success");
      document.title = 'Dark Mode'
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText="About"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <TextForm showalert={showalert} heading="Enter your heading here..." mode={mode}/> */}
      </div>
      {/* <About/> */}
      <About mode={mode}></About>
    </>
  );
}

export default App;
