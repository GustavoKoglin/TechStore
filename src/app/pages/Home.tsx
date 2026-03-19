import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');
  const [priceSort, setPriceSort] = useState<'none' | 'asc' | 'desc'>('none');

  useEffect(() => {
    const search = searchParams.get('search') ?? '';
    const category = searchParams.get('category') ?? 'todos';
    const price = searchParams.get('price') as 'all' | 'low' | 'mid' | 'high' | null;
    const sort = searchParams.get('sort') as 'none' | 'asc' | 'desc' | null;

    const isValidCategory = categories.some((item) => item.id === category);
    const isValidPrice = price === 'all' || price === 'low' || price === 'mid' || price === 'high';
    const isValidSort = sort === 'none' || sort === 'asc' || sort === 'desc';

    setSearchTerm(search);
    setSelectedCategory(isValidCategory ? category : 'todos');
    setPriceRange(isValidPrice ? price : 'all');
    setPriceSort(isValidSort ? sort : 'none');
  }, [searchParams]);

  const updateUrlFilters = (
    nextSearch: string,
    nextCategory: string,
    nextPrice: 'all' | 'low' | 'mid' | 'high',
    nextSort: 'none' | 'asc' | 'desc',
  ) => {
    const params = new URLSearchParams();

    if (nextSearch.trim()) params.set('search', nextSearch.trim());
    if (nextCategory !== 'todos') params.set('category', nextCategory);
    if (nextPrice !== 'all') params.set('price', nextPrice);
    if (nextSort !== 'none') params.set('sort', nextSort);

    setSearchParams(params, { replace: true });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = product.price < 500;
    if (priceRange === 'mid') matchesPrice = product.price >= 500 && product.price < 2000;
    if (priceRange === 'high') matchesPrice = product.price >= 2000;

    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (priceSort === 'asc') return a.price - b.price;
    if (priceSort === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to TechStore
          </h1>
          <p className="text-xl mb-8 opacity-90">
            The best tech products at the best prices
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  const nextSearch = e.target.value;
                  setSearchTerm(nextSearch);
                  updateUrlFilters(nextSearch, selectedCategory, priceRange, priceSort);
                }}
                className="pl-10"
              />
            </div>
            
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                updateUrlFilters(searchTerm, value, priceRange, priceSort);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={priceRange}
              onValueChange={(value: 'all' | 'low' | 'mid' | 'high') => {
                setPriceRange(value);
                updateUrlFilters(searchTerm, selectedCategory, value, priceSort);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All prices</SelectItem>
                <SelectItem value="low">Up to $500</SelectItem>
                <SelectItem value="mid">$500 - $2,000</SelectItem>
                <SelectItem value="high">Above $2,000</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={priceSort}
              onValueChange={(value: 'none' | 'asc' | 'desc') => {
                setPriceSort(value);
                updateUrlFilters(searchTerm, selectedCategory, priceRange, value);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Default order</SelectItem>
                <SelectItem value="asc">Lowest price</SelectItem>
                <SelectItem value="desc">Highest price</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
                setPriceRange('all');
                setPriceSort('none');
                setSearchParams({}, { replace: true });
              }}
            >
              Clear Filters
            </Button>
            <span className="text-sm text-gray-500 flex items-center">
              {filteredProducts.length} product(s) found
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No products found with the selected filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}