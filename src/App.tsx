import './App.css'

export default function App() {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
      <img src="https://placehold.co/400x250"
        alt="Produto"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-800">
          Notebook Gamer
        </h2>
        <p className="text-gray-600">RTX 4060, 16GB RAM, Ryzen 7</p>
        <p className="text-green-600 font-bold mt-2">R$ 6.999,00</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Comprar
        </button>
      </div>
    </div>
  );
}