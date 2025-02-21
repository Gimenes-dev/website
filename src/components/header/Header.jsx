import { useState, useContext } from 'react';
import { FaUserCircle, FaCog, FaEye, FaEyeSlash, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import { AuthContext } from '../../context/AuthContext'; // Supondo que você tenha um contexto de autenticação

const Header = () => {
  const [showValue, setShowValue] = useState(false);
  const { user, logout } = useContext(AuthContext); // Obtendo o usuário e a função de logout do contexto

  const toggleValueVisibility = () => {
    setShowValue(!showValue);
  };

  const handleLogout = () => {
    logout(); // Chama a função de logout, que provavelmente limpa o estado de autenticação
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 bg-opacity-80 text-white shadow-md">
      {/* Logo */}
      <div className="flex w-50 items-center justify-center space-x-3">
        <img src={Logo} alt="Logo da Empresa" className="h-16" />
      </div>

      {/* Valor com opção de mostrar/ocultar */}
      <div className="flex items-center space-x-2">
        <p className="text-lg font-medium">
          Valor: {showValue ? 'R$ 1.000,00' : '••••••••'}
        </p>
        <button 
          onClick={toggleValueVisibility} 
          className="text-gray-400 hover:text-white transition-colors"
        >
          {showValue ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>

      {/* Foto do usuário, configurações e logout */}
      <div className="flex items-center gap-8 justify-evenly space-x-6">
        <Link to="/profile">
          <div className="text-gray-400 hover:text-white transition-colors">
            <FaUserCircle size={32} />
          </div>
        </Link>
        <Link to="/settings">
          <div className="text-gray-400 hover:text-white transition-colors">
            <FaCog size={24} />
          </div>
        </Link>

        {/* Exibe o botão de logout somente se o usuário estiver logado */}
        {user && (
          <button 
            onClick={handleLogout} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaSignOutAlt size={24} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
