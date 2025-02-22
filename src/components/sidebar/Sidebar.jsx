import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const listFunc = [
    { to: "/" ,  name: "Home"},
    { to: "/about", name: "Sobre" },
    { to: "/contact", name: "Contato" },
    { to: "/settings", name: "Configurações" },
  ];

  const buttonListTo = listFunc.map((list, index) => { 
    return <li key={index}>
        <Link to={list.to} className="text-lg hover:text-green-500 transition-colors">{list.name}</Link>
      </li>
  });

  return (
    <>
      {/* Botão para abrir o menu no mobile */}
      <button
        className="md:hidden p-2 fixed top-4 left-4 z-50 bg-gray-900 text-white rounded-lg shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay escuro quando o menu está aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)} // Fecha ao clicar fora
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 min-h-full bg-gray-900 bg-opacity-80 text-white p-4 w-64 z-50 transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64`}
      >
        {/* Botão para fechar no mobile */}
        <button
          className="md:hidden p-2 mb-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Navegação */}
        <nav>
          <ul className="space-y-4">
            {buttonListTo}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
