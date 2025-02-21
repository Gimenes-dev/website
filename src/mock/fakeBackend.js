const usersDB = [
    {
      id: 1,
      username: "admin",
      password: "1234",
      role: "manager",
      token: "fake-jwt-token-123"
    },
    {
      id: 2,
      username: "investor",
      password: "5678",
      role: "investor",
      token: "fake-jwt-token-456"
    }
  ];

  export const fakeLogin = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = usersDB.find((u) => u.username === username && u.password === password);
            if(user) {
                document.cookie = `authToken=${user.token}; path=/; Secure; HttpOnly; SameSite=Strict`;
                resolve({ sucess: true, user: { id: user.id, username: user.username, role: user.role }});
            } else {
                reject({ sucess: false, message: "Usuário ou senha incorretros!"});
            }
        }, 1000);
    });
  };

  export const fakeLogout = async () => {
    return new Promise((resoleve) => {
        setTimeout(() => {
            document.cookie = `authToken=; path=/; expires=Thu, 01 Jan 00:00:00 UTC;`;
            resoleve({ sucees: true });
        }, 1000);
    });
  };