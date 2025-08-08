import './App.css';

// JSX: JSX is basicly HTML itself
// But some of the words are reserved in JSX like for, class cannot be used
// Babel compiles the entire JSX


let name = "Veeresh";
const element = <h1>Hello, {name}</h1>;
console.log(element)
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <h1>Hello {name}</h1>
    <div className="container">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sint tempore mollitia vitae est, dignissimos asperiores totam eius a dicta dolor at modi id obcaecati aliquam, laborum earum ipsam ea architecto deleniti nisi. Veniam?</div>
    </>
  );
}

export default App;
