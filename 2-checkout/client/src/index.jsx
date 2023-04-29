import React, { useState } from "react";
import { render } from "react-dom";
import F1 from "./components/F1.jsx";
import F2 from "./components/F2.jsx";
import F3 from "./components/F3.jsx";
import Confirmation from "./components/Confirmation.jsx";
import axios from "axios";

const App = () => {

  const [data, setData] = useState({});
  const [next, setNext] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new formData(form);
    console.log(formData);
  }

  return (
    <div>
      <h1>Budget Checkout</h1>
      <div>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
        {next === '' && <button onClick={() => setNext('F1')}>Checkout</button>}
        {next === 'F1' && <F1 setNext={setNext} setData={setData} data={data}/>}
        {next === 'F2' && <F2 setNext={setNext} setData={setData} data={data}/>}
        {next === 'F3' && <F3 setNext={setNext} setData={setData} data={data}/>}
        {next === 'finish' && <Confirmation setNext={setNext} data={data}/>}
        {console.log(data)}
      </div>
    </div>
  );

}

render(<App/>, document.getElementById("root"))