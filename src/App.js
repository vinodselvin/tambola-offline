import logo from './logo.svg';
import Home from "./components/home.js";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Organizer from './components/organizer';
import Ticket from './components/ticket';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="organize" element={<Organizer />} />
        <Route path="ticket" element={<Ticket/>} />
    </Routes>
  );
}

export default App;
