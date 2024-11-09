import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-text">
          © 2024 Usman Khan | All Rights Reserved
        </div>
        
        <ul className="social-links">
          <li>
            <Link href="https://github.com/pixelman10" className="social-link">
            
          <FaGithubSquare  className="social-icon"/>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/usman-khan-aa34842b5/" className="social-link">
            <FaLinkedin className="linkedin-icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/khan_usman27/" className="social-link">
             
            <AiOutlineInstagram className="instagram-icon" />


            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
