import { useState } from 'react';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend.
    alert('Perfil atualizado!');
  };

  return (
    <div className="min-h-full w-full bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-bold text-gray-600 mb-6">Editar Perfil</h2>

      {/* Foto de perfil */}
      <div className="mb-8 flex flex-col items-center">
        <label htmlFor="profile-image" className="cursor-pointer">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-500 mb-4">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="w-full h-full flex items-center justify-center text-white">Sem foto</span>
            )}
          </div>
        </label>
        <input
          type="file"
          id="profile-image"
          onChange={handleImageChange}
          className="hidden"
        />
        <span className="text-gray-400 text-sm">Clique na foto para alterar</span>
      </div>

      {/* Formulário de dados */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 bg-opacity-80 p-6 rounded-lg shadow-lg space-y-6">
        {/* Nome */}
        <div>
          <label htmlFor="name" className="text-lg text-gray-300 mb-2">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none"
            placeholder="Digite seu nome"
          />
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className="text-lg text-gray-300 mb-2">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none"
            placeholder="Digite seu e-mail"
          />
        </div>

        {/* Senha */}
        <div>
          <label htmlFor="password" className="text-lg text-gray-300 mb-2">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none"
            placeholder="Digite sua senha"
          />
        </div>

        {/* Botão de submit */}
        <div>
          <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Atualizar Perfil
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
