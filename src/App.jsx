import "./styles.css";
import "./index.css";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Footer } from "./Components/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NavBar } from "./Components/NavBar/NavBar";
import { Artist } from "./Components/Artist/Artist";



function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Artist/>
      <Footer />
    </Router>

  )
}

export default App
