import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-start">
      <Sidebar />
    </div>
  );
}

export default App;
