
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className="flex justify-end bg-coldpurple-500">
        <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/sobre">Sobre</Link>
            </li>
            <li>
             <Link to="/skills">Skills</Link>
            </li>
            <li>
             <Link to="/projetos">Projetos</Link>
            </li>
            <li>
             <Link to="/contato">Contato</Link>
            </li>
        </ul>
    </nav>
    );
};

