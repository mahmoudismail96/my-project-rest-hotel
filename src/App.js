import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Rooms from "./Pages/Rooms/Rooms";
import Facilities from "./Pages/Facilities/Facilities";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
