import logo from "./logo.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChatPage } from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} exact />

        {/* Chats Page */}
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
