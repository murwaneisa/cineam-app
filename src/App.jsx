import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button variant="secondary">Button as link</Button>
      <Button variant="success">Button as link</Button>
    </div>
  );
}

export default App;
