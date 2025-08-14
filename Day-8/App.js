// import './App.css';

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

// JSX: JSX is basicly HTML itself
// But some of the words are reserved in JSX like for, class cannot be used
// Babel compiles the entire JSX


let name = "Veeresh";
const element = <h1>Hello, {name}</h1>;
console.log(element)
function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText="About"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils"/>
      <div className="container my-3">
      <TextForm heading="Enter your heading here..."/>
      </div>
      <About></About>
    </>
  );
}

export default App;
