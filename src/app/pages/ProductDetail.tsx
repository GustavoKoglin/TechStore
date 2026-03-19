import { useParams, useNavigate } from 'react-router';
import { products } from '../data/products';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate('/')}>
            Back to store
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast.success('Product added to cart!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-4">
                {product.inStock ? (
                  <Badge variant="default">In stock</Badge>
                ) : (
                  <Badge variant="secondary">Out of stock</Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-500">(127 reviews)</span>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <p className="text-sm text-gray-500 mt-1">
                  Interest-free installments available
                </p>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-3 mt-auto">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? 'Add to Cart' : 'Product Unavailable'}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/cart')}
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Product Information</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1-year warranty</li>
                  <li>• Free shipping nationwide</li>
                  <li>• Returns within 30 days</li>
                  <li>• Ships within 48 business hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}