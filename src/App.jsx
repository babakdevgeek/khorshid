import { useCallback, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Reshteha from "./components/Reshteha";
import Tarefeha from "./components/Tarefeha";
import Footer from "./components/Footer";
import Address from "./components/Address"
import { height_context } from "./contexts/Header_height";
import ActiveHours from "./components/ActiveHours";
import { AnimatePresence } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const {height} = useContext(height_context)

  return (
    <>
    <AnimatePresence mode="wait">
    <BrowserRouter>
    <Navbar/>
    <div className="main-container" style={{height: `calc(100vh - ${height}px)`}}>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/reshteha" element={<Reshteha/>} />
      <Route path="/tarefeha" element={ <Tarefeha/> } />
      <Route path="/address" element={ <Address/> } />
      <Route path="/active-hours" element={ <ActiveHours/> } />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    </AnimatePresence>
    </>
  );
}

export default App;
