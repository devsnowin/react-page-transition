import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='font-medium flex items-center py-8 z-20 relative'>
            <ul className='flex items-center gap-12'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}
