import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../loading/Loading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 bg-opacity-80">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[300px]">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Entrar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
