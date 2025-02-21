import { createContext, useEffect, useState } from "react";
import { fakeLogin, fakeLogout } from "../mock/fakeBackend";
import Loading from "../components/loading/Loading";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    // Verifica o token de autenticação no localStorage quando o componente é montado
    useEffect(() => {
        const storedUser = localStorage.getItem("user"); // Recupera o usuário do localStorage
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Se houver, define o estado com os dados do usuário
        }
        setLoading(false); // Após a verificação, desativa o carregamento
    }, []);

    // Função de login
    const login = async (username, password) => {
        setLoading(true); // Ativa o estado de carregamento
        try {
            const response = await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    try {
                        const res = await fakeLogin(username, password); // Simulação de login
                        resolve(res); // Responde com os dados do usuário
                    } catch (err) {
                        reject(err); // Caso haja erro, rejeita a promise
                    }
                }, 3000); // Simula um atraso de 3 segundos
            });

            setUser(response.user); // Atualiza o estado com o usuário autenticado
            localStorage.setItem("user", JSON.stringify(response.user)); // Persiste o usuário no localStorage
            return response;
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            return error; // Retorna o erro em caso de falha
        } finally {
            setLoading(false); // Desativa o carregamento
        }
    };

    // Função de logout
    const logout = () => {
        fakeLogout(); // Chama a função fakeLogout
        setUser(null); // Limpa o estado de usuário
        localStorage.removeItem("user"); // Remove o usuário do localStorage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {loading ? (
                <Loading />
            ) : (
                children // Só renderiza os componentes filhos após a verificação
            )}
        </AuthContext.Provider>
    );
};
