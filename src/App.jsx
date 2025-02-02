
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AiTutor from './components/AI_tutor.jsx';
import Navbar from './components/navBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AiTutor" element={<AiTutor />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
