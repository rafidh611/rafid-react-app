import "./App.css";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [output, setOutput] = React.useState("");

  const submitHandler = () => {
    const url = "/" + name; //const url = "http://127.0.0.1:5000/" + name; <== for the local test  
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((jsondata) => setOutput(jsondata["message"]))
      .catch((err) => {
        console.log(err);
      });
  };

  //frontend stuff
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter first name
          </p>
        <input onChange={(event) => setName(event.target.value)} />
        <h1> </h1>
        <button type="button" onClick={submitHandler}>
          Get Last Name
        </button>
        <p>{output}</p>
      </header>
    </div>
  );
}

export default App;
