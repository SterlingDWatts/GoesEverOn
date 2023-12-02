import React from "react";
import { Routes, Route } from "react-router-dom";
// components
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SignInPage from "./pages/SignInPage/SignInPage";
// styles
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const isCorp = window.location.hostname.startsWith("corp") || window.location.hostname.startsWith("localhost");

  return (
    <div className="App">
      <Routes>
        {isCorp && <Route path="/signin" element={<SignInPage />} />}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
