import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className=" flex h-screen justify-center items-center bg-gray-100">
      <Todos />
    </div>
  );
}

export default App;
