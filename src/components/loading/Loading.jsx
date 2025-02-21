const Loading = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
        <div className="flex flex-col items-center">
          {/* Animação Circular */}
          <div className="relative w-16 h-16">
            <div className="w-full h-full border-4 border-green-500 border-opacity-50 rounded-full animate-spin absolute"></div>
            <div className="w-10 h-10 border-4 border-green-500 border-opacity-100 rounded-full animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
  
          {/* Texto de Carregamento */}
          <p className="text-lg text-white font-semibold mt-4 animate-pulse">
            Carregando...
          </p>
        </div>
      </div>
    );
  };
  
  export default Loading;
  