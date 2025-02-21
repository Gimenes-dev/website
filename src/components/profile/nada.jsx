import { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null); // Para armazenar a imagem cortada
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [cropper, setCropper] = useState(null); // Para referência do cropper

  // Função para lidar com a seleção de imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Exibe a imagem original
      setIsModalOpen(true); // Abre o modal para o corte
    }
  };

  // Função para o corte da imagem
  const handleCrop = () => {
    if (cropper) {
      // Verifica se o cropper foi corretamente instanciado
      const canvas = cropper.getCroppedCanvas; // Obtém o canvas com a imagem cortada
      if (canvas) {
        const croppedData = canvas.toDataURL(); // Converte o canvas para base64
        setCroppedImage(croppedData); // Atualiza o estado com a imagem cortada
        setImage(croppedData); // Atualiza o estado com a imagem cortada
      }
    }
  };

  // Função para finalizar a seleção do corte
  const handleFinalizeCrop = () => {
    handleCrop(); // Faz o corte da imagem
    setIsModalOpen(false); // Fecha o modal após o corte
  };

  // Função de submit do formulário
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
            {croppedImage ? (
              <img src={croppedImage} alt="Profile" className="w-full h-full object-cover" />
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

      {/* Modal para edição da imagem */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
            <h3 className="text-xl font-bold mb-4">Ajuste sua Foto</h3>
            <Cropper
              src={image}
              style={{ height: 400, width: '100%' }}
              initialAspectRatio={1}
              aspectRatio={1}
              preview=".img-preview"
              guides={false}
              crop={handleCrop} // Chama o handleCrop sempre que o corte for alterado
              ref={(cropperInstance) => setCropper(cropperInstance)} // Instancia o cropper
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Fechar
              </button>
              <button
                onClick={handleFinalizeCrop} // Garante que o crop finaliza e a imagem é aplicada
                className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Finalizar Seleção
              </button>
            </div>
          </div>
        </div>
      )}

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
