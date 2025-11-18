import "../styles/footer.css";
import {
  Leaf,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand-logo">
                <Leaf size={32} />
                <span>Smart Greenhouse</span>
              </div>
              <p className="brand-description">
                Revolutionizing agriculture through AI and IoT innovation. A
                university research prototype for sustainable farming.
              </p>
            </div>

            <div className="footer-links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#docs">Documentation</a>
                </li>
                <li>
                  <a href="#research">Research Papers</a>
                </li>
              </ul>
            </div>

            <div className="footer-social">
              <h3 className="footer-heading">Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Smart Greenhouse Project - University Prototype.
              All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
