import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Login from "./Routes/Login";
import NewsFeed from "./Routes/NewsFeed";
import SignUp from "./Routes/Signup";

function App() {
  const isUser = false;

  return (
    <Router>
      <Navbar isUser={isUser} />
      <Routes>
        <Route
          index
          path="/"
          element={isUser ? <NewsFeed /> : <Navigate to="/login" replace />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
