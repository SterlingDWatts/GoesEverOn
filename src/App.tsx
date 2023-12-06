import React from "react";
import { Outlet } from "react-router-dom";
import Toasts from "./components/Toasts/Toasts";
// styles
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <Toasts />
      <Outlet />
    </div>
  );
}

export default App;
