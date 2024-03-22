
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav>
        <ul className="flex h-[120px] items-center justify-end bg-coldpurple-500 text-white font-extrabold space-x-32 p-16 right-10 uppercase">
            <li>
                Home
            </li>
            <li>
                Sobre
            </li>
            <li>
                Skills
            </li>
            <li>
             Projetos
            </li>
            <li>
                Contato
            </li>
        </ul>
    </nav>
    );
};

