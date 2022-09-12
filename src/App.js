import logo from './logo.svg';
import Home from "./components/home.js";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Organizer from './components/organizer';
import Ticket from './components/ticket';

function App() {
  return (
    <>
      <Routes>
          <Route path="/tambola-offline/" element={<Home />} />
          <Route path="/tambola-offline/organize" element={<Organizer />} />
          <Route path="/tambola-offline/ticket" element={<Ticket/>} />
      </Routes>
    </>
  );
}

export default App;
