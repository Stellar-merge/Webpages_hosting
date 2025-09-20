import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className='sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md'>
            <div id="Logo" className="flex items-center text-white font-bold text-lg">
                <p>NoNamed</p>
            </div>
            <div id="links" className="flex space-x-4 text-white duration-300">
                <Link to="/" className='hover:text-orange-500'>Home</Link>
                <Link to="/about" className='hover:text-orange-500'>About</Link>
                <Link to="/dashboard" className='hover:text-orange-500'>Dashboard</Link>
                <Link to="/quiz" className='hover:text-orange-500'>Quiz</Link>
                <Link to="/edu" className='hover:text-orange-500'>For Educators</Link>
            </div>
        </nav>
    )
}