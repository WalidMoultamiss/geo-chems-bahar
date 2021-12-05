import React, { useState } from "react";
import Map from "./Map";
import Home from "./components/Home";
import GetImage from "./components/getImage";

function App() {
  // pass the props to Home component event handler

  const [step, setStep] = useState(0);
  return <div>{
    step == 0 ?
    <Home setStep={setStep} />
      :
      step == 1 ?
    <GetImage setStep={setStep} /> 
      :
    <Map />}</div>;
}

export default App;
