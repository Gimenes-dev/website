import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 bg-opacity-80 text-white shadow-lg p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-lg hover:text-green-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg hover:text-green-500 transition-colors">Sobre</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg hover:text-green-500 transition-colors">Contato</Link>
          </li>
          <li>
            <Link to="/settings" className="text-lg hover:text-green-500 transition-colors">Configurações</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
