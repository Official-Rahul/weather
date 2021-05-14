import React from "react";
import FiveDay from "./components/FiveDay";
import Today from "./components/Today";

export default function App() {
  return (
    <div className="app">
      <Today />
      <FiveDay />
    </div>
  );
}
