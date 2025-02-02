import { Link } from "react-router-dom";
import './styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">PyChan</h1>
      <ul className="nav-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/aitutor">🤖 AI Tutor</Link></li>
        <li><Link to="/quizzes">📝 Quizzes</Link></li>
        <li><Link to="/playground">🎮 Playground</Link></li>
        <li><Link to="/lessons">📖 Lessons</Link></li>
        <li><Link to="/leaderboard">🏆 Leaderboard</Link></li>
        <li><Link to="/parents">👨‍👩‍👧 Parents Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
