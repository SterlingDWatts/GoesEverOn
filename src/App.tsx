import React from "react";
import DrawerAppBar from "./components/DrawerAppBar/DrawerAppBar";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <HomePage />
    </div>
  );
}

export default App;
