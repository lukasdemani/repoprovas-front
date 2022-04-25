import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/reset.css";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Tests from "./pages/Tests/index";

export default function App() {
  const persistedtoken = localStorage.getItem("token");

  const [token, setToken] = useState(persistedtoken);
  const [tab, setTab] = useState(0);

  function setAndPersistToken(token) {
    setToken(token);
    localStorage.setItem("token", token);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        setAndPersistToken,
        tab,
        setTab
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tests/:tab" element={<Tests />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
