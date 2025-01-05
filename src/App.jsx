import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/landingpage";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import Demo from "./pages/demo/demo";
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";
import Home from "./pages/app/home/home";
import SocialPage from "./pages/app/subject/social/social";
import { UserProvider } from "./context/UserContext";
import SocialTest from "./pages/app/subject/social/test";
import SocialView from "./pages/app/subject/social/view";
import TestPage from "./pages/test/test";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* protected routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/home/social" element={<SocialPage />} />
          <Route path="/test" element={<SocialTest />} />
          <Route path="/view" element={<SocialView />} />
          <Route path="/testi" element={<TestPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
