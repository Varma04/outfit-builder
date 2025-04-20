import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>No outfits added yet.</p>
        ) : (
          cart.map((outfit, i) => (
            <div key={i} className="mb-6 p-4 border rounded shadow">
              <h3 className="font-semibold mb-2">Outfit {i + 1}</h3>
              <div className="flex space-x-2">
                {outfit.map((item, j) => (
                  <img key={j} src={item.icon} className="w-16 h-16" />
                ))}
              </div>
            </div>
          ))
        )}
      </main>
    </>
  );
}