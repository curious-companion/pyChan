import './styles/homepage.css';


const HomePage = () => {
  const handleRedirect = () => {
    window.location.href = "https://skoolofcode.us/get-started?step=student&child=0";
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Best Coding Classes for Kids</h1>
          <p>
            Expert Teachers | Holistic STEM-based Curriculum
          </p>
          <button className="trial-button" onClick={handleRedirect}>
            Book Your Free Trial
          </button>
        </div>
      </header>

    </div>
  );
};

export default HomePage;
