import { useState } from 'react';
import { DndProvider, HTML5Backend } from 'react-dnd';
import Header from '../components/Header';
import ClothingItem from '../components/ClothingItem';
import OutfitCanvas from '../components/OutfitCanvas';
import { useCart } from '../context/CartContext';

const clothingItems = [
  { id: 1, name: "Red T-Shirt", icon: "https://i.imgur.com/1ZQZ1Zz.png" },
  { id: 2, name: "Blue Jeans", icon: "https://i.imgur.com/z2wL5qv.png" },
  { id: 3, name: "Leather Jacket", icon: "https://i.imgur.com/ak4EYiU.png" }
];

export default function Home() {
  const [outfit, setOutfit] = useState([]);
  const { addToCart } = useCart();

  const handleDrop = (item) => {
    setOutfit([...outfit, item]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <main className="p-6 space-y-8">
        <h2 className="text-xl font-semibold text-gray-700">Clothing Items</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {clothingItems.map(item => <ClothingItem key={item.id} item={item} />)}
        </div>

        <h2 className="text-xl font-semibold text-gray-700">Your Outfit</h2>
        <OutfitCanvas outfitItems={outfit} onDrop={handleDrop} />

        <button
          onClick={() => addToCart(outfit)}
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Add Outfit to Cart
        </button>
      </main>
    </DndProvider>
  );
}