import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import permissions from "../../config/permissions";

const Settings = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-full w-full bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center p-4">
        <p className="text-xl text-red-500 font-semibold">
          Você não tem permissão para acessar esta página.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-full w-full bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center p-4">
      <h2 className="text-4xl font-bold text-gray-600 mb-4">Painel de Configurações</h2>
      <ul className="space-y-2 text-lg text-gray-600">
        {permissions[user.role].map((funcao, index) => (
          <li key={index} className="border-b border-gray-600 pb-2">{funcao}</li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
