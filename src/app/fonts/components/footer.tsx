// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Footer Content */}
        <div className="Footer-content text-center md:text-left mb-4 md:mb-0">
          © 2024 Usman Khan | All Rights Reserved
        </div>
        {/* Social Links */}
        <ul className="Footer-buttons flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <li>
            <Link href="https://github.com/pixelman10"
               className="text-gray-300 hover:text-purple-500 transition-colors">Github</Link>
            
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/usman-khan-aa34842b5/"
              className="text-gray-300 hover:text-purple-500 transition-colors">LinkedIn</Link>
           
          </li>
          <li>
            <Link href="https://www.instagram.com/khan_usman27/"
               className="text-gray-300 hover:text-purple-500 transition-colors">Instagram</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
