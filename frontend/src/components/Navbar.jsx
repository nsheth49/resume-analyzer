import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-xl font-semibold text-white">
          Resume<span className="text-blue-600">AI</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-300">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link to="/ai">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm">
            Try AI
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;