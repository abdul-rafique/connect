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
import User from "./Routes/User/index";
import About from "./Routes/User/About";
import Friends from "./Routes/User/Friends";
import Posts from "./Routes/User/Posts";

function App() {
  const isUser = true;

  return (
    <Router>
      <Navbar isUser={isUser} />
      <div className="bg-gray/20 min-h-screen h-fit pt-20 overflow-x-hidden">
        <div className="md:w-2/3 lg:w-1/2 min-w-min max-w-5xl mx-auto px-3 py-10 flex flex-col gap-3">
          <Routes>
            <Route
              index
              element={isUser ? <NewsFeed /> : <Navigate to="/login" replace />}
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="user" element={<User />}>
              <Route index element={<Posts />} />
              <Route path="friends" element={<Friends />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
