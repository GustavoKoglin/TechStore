import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShoppingCart, User, LogOut, Store, Search, Menu, X, Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { categories } from '../data/products';

export function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="hidden md:inline">Free shipping on orders over $50</span>
              <span className="hidden lg:inline">•</span>
              <span className="hidden lg:inline">30-day return policy</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/help" className="hover:underline text-xs md:text-sm">
                Help
              </Link>
              <Link to="/orders" className="hover:underline text-xs md:text-sm">
                My Orders
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl hidden sm:inline bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              TechStore
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 h-11 border-2 border-gray-300 focus:border-blue-500 rounded-lg"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-9 bg-blue-600 hover:bg-blue-700"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Wishlist - Desktop */}
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem disabled className="font-medium">
                    {user.name}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/orders')}>
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <User className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <form onSubmit={handleSearch} className="md:hidden pb-3">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 h-10 border-2 border-gray-300 focus:border-blue-500 rounded-lg"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 bg-blue-600 hover:bg-blue-700"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Categories - Desktop */}
        <div className="hidden md:flex items-center gap-1 pb-3 border-t pt-3 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/?category=${category.id}`}
              className="px-3 py-1.5 rounded-md hover:bg-gray-100 text-sm whitespace-nowrap transition-colors"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm text-gray-500 mb-2">Categories</h3>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/?category=${category.id}`}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.label}
                </Link>
              ))}
              <div className="border-t pt-2 mt-2">
                <Link
                  to="/help"
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Help & Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
