import React from "react";
import Header from "./components/header/header.component";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import MessagesPage from "./pages/messages-page/messages-page.component";
import AuthenticationPage from "./pages/authentication-page/authentication-page.component";
import CreatePostPage from "./pages/create-post/create-post-page.component";

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App">
      {pathname === "/accounts/signup" ||
      pathname === "/accounts/login" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inbox/messages" element={<MessagesPage />} />
        <Route path="/create/post" element={<CreatePostPage />} />
        <Route
          path="/accounts/signup"
          element={<AuthenticationPage type="signup" />}
        />
        <Route
          path="/accounts/login"
          element={<AuthenticationPage type="login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
