import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./Routes/Login";
import NewsFeed from "./Routes/NewsFeed";
import SignUp from "./Routes/Signup";
import User from "./Routes/User/index";
import About from "./Routes/User/About";
import Friends from "./Routes/User/Friends";
import Posts from "./Routes/User/Posts";
import ForgotPass from "./Routes/ForgotPass";
import Layout from "./Layout";

function App() {
  const isUser = true;

  return (
    <Router>
      <Routes>
        <Route
          index
          element={
            isUser ? (
              <Layout>
                <NewsFeed />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPass />} />
        <Route
          path="user"
          element={
            <Layout isUser={isUser}>
              <User />
            </Layout>
          }
        >
          <Route index element={<Posts />} />
          <Route path="friends" element={<Friends />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
