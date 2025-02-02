import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>PyChan</h2>
        <div className="contact-details">
          <div className="phone">
            <FaPhoneAlt />
            <span>+1 425-305-4645</span>
          </div>
          <div className="email">
            <FaEnvelope />
            <span>learn@skoolofcode.us</span>
          </div>
        </div>
      </div>

      <div className="footer-center">
        <div className="footer-links">
          <a href="https://your-link.com/curriculum" target="_blank" rel="noopener noreferrer">Curriculum</a>
          <a href="https://your-link.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          <a href="https://your-link.com/showcase" target="_blank" rel="noopener noreferrer">ShowCase</a>
          <a href="https://your-link.com/our-approach" target="_blank" rel="noopener noreferrer">Our Approach</a>
          <a href="https://your-link.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
          <a href="https://your-link.com/teachers" target="_blank" rel="noopener noreferrer">Teachers</a>
        </div>
      </div>

      <div className="footer-right">
        <div className="social-media">
          <a href="https://www.instagram.com/skoolofcode/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/skoolofcode/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://x.com/skoolofcode" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/skoolofcode/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@skoolofcode1785" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
