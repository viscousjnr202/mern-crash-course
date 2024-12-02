import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home-page/HomePage";
import CreatePage from "./pages/create-page/CreatePage";
import MainLayout from "./toastify/MainLayout";
function App() {
  const [toggleBackgroundColor, setToggleBackgroundColor] = useState(false);
  function handleToggled(element) {
    setToggleBackgroundColor(!toggleBackgroundColor);
  }
  return (
    <MainLayout>
      <div className={toggleBackgroundColor ? "app black" : "app white"}>
        <Navbar
          toggleBackgroundColor={toggleBackgroundColor}
          handleToggled={handleToggled}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </MainLayout>
  );
}

export default App;
