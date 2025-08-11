// import './App.css';

import Navbar from "./Components/Navbar";

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
    </>
  );
}

export default App;
