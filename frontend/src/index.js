import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from "react";

function OutputBox({name})
{
  //const[name_1,Setname] = useState("");
  const condition_1 = () => {
  if(name === 'Rafid')
  {
     return <div> <textarea value="Hasan" readOnly/></div>;
  }
  else if(name === '')
  {
     return <div> <textarea value="" readOnly/></div>;
  }
  else
  {
     return <div> <textarea value="User Not Found" readOnly /></div>;
  }
};
 
  
  return(
      <div>
        <h2>Response From Server</h2>
        {condition_1()}
      </div>
  );

}

function InputBox()
{
  const[first_name,Set_first_name] = useState("");

  const onChange = (event) => Set_first_name(event.target.value);

  return(
    <div>
      <h2>Your Input Request to Server</h2>
      <input type="text" value={first_name} onChange = {onChange} />
      <OutputBox name={first_name} />
    </div>
  );

}


ReactDOM.render(
  <React.StrictMode>
    <InputBox />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
