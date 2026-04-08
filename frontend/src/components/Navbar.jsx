import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <div className="font-bold text-xl">Resume Analyzer</div>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/ai" className="hover:underline">AI</Link>
            </div>
        </nav>
    );
};

export default Navbar;