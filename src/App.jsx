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
import SinglePost from "./Routes/SinglePost";

function App() {
  const isUser = true;

  return (
    <Router>
      <Navbar isUser={isUser} />
      <div className="bg-gray/5 min-h-screen h-fit pt-20">
        <div className="md:w-2/3 lg:w-1/2 min-w-min mx-auto px-3 py-10 flex flex-col gap-3">
          <Routes>
            <Route
              index
              path="/"
              element={isUser ? <NewsFeed /> : <Navigate to="/login" replace />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/single_post" element={<SinglePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
