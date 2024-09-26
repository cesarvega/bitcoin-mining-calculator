import { useParams } from 'react-router-dom';

export function RequestCar() {
    const { id } = useParams(); // Hook para obtener el parámetro dinámico "id" de la URL

    return (
        <div className=" w-full h-screen bg-gray-900 flex  ">

<div className='flex flex-col  mt-10 gap-4 p-4'>
    <img src="/logo.jpeg" alt="logo omniparking" />
            <button onClick={()=> console.log(id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
                Request My Car
            </button>
</div>

        </div>
    )
}
