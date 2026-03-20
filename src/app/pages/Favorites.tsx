import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { products } from '../data/products';
import { useFavorites } from '../context/FavoritesContext';

export function Favorites() {
  const navigate = useNavigate();
  const { favoriteIds } = useFavorites();

  const favoriteProducts = products.filter((product) => favoriteIds.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <Heart className="h-24 w-24 mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
          <p className="text-gray-600 mb-6">Tap the heart on a product to save it here.</p>
          <Button onClick={() => navigate('/')}>Explore Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">My Favorites</h1>
        <p className="text-gray-600 mb-8">{favoriteProducts.length} favorite product(s)</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
