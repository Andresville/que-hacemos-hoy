import "./styles.css";
import "./index.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Footer } from "./Components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavBar } from "./Components/NavBar/NavBar";
import { Artist } from "./Components/Artist/Artist";
import { Shows } from "./Components/Shows/Shows";



function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:category" element={<Artist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      <footer>
      <Footer />
      </footer>
    </Router>

  )
}

export default App
