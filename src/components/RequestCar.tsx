import { useParams } from 'react-router-dom';

export function RequestCar() {
  const { id } = useParams(); // Hook para obtener el parámetro dinámico "id" de la URL

  // Separar el id y el keycode usando un "_"
 
  const [sessionId, keycode] = id?.split('_') || [];

   // Aquí separas el "id" y el "keycode"

  // Función para manejar la solicitud POST
  const handleRequestCar = async () => {
    try {

      const response = await fetch(import.meta.env.VITE_URL_SOCKET, {

        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ session_id: sessionId, license_plate: keycode }), // Enviamos el sessionId y keycode
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error en la solicitud: ${errorMessage}`);
      }

      const data = await response.json(); // Obtener los datos de la respuesta
      console.log('Respuesta del servidor:', data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-900 flex">
      <h1>{keycode}</h1>
      <div className='flex flex-col mt-10 gap-4 p-4'>
        <img src="/logo.jpeg" alt="logo omniparking" />
        <button 
          onClick={handleRequestCar} // Llama a la función handleRequestCar al hacer clic
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Request My Car
        </button>
      </div>
    </div>
  );
}

