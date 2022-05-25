import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SecondaryLayout from "./layouts/secondaryLayout";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Dashboard from "./pages/dashboard";
import Sell from "./pages/sell";
import Buy from "./pages/buy";
import NotFound from "./pages/notFound";
import "../src/assets/fontawesome/css/all.min.css";
import SignUp from "./pages/signup";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<SecondaryLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="sell" element={<Sell />} />
            <Route path="dashboard/buy/:id" element={<Buy />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
