import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
function App(){
  const[alertVisiable, setAlertVisibility] = useState(false)

  return <div>
    { alertVisiable && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
    <Button onClick={()=>setAlertVisibility(true)}>My Button</Button>
  </div>

}

export default App;
