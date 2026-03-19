import { Link } from 'react-router';
import { Store, Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import visaLogo from '../../assets/payment/visa.svg';
import mastercardLogo from '../../assets/payment/mastercard.svg';
import paypalLogo from '../../assets/payment/paypal.svg';
import americanExpressLogo from '../../assets/payment/americanexpress.svg';
import applePayLogo from '../../assets/payment/applepay.svg';

export function Footer() {
  const [email, setEmail] = useState('');
  const paymentMethods = [
    { name: 'Visa', logo: visaLogo },
    { name: 'Mastercard', logo: mastercardLogo },
    { name: 'PayPal', logo: paypalLogo },
    { name: 'American Express', logo: americanExpressLogo },
    { name: 'Apple Pay', logo: applePayLogo },
  ] as const;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white text-center md:text-left">
              <h3 className="text-xl font-bold mb-1">Subscribe to our Newsletter</h3>
              <p className="text-sm opacity-90">Get exclusive deals and updates delivered to your inbox</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/90 border-0 w-full md:w-80"
                required
              />
              <Button type="submit" variant="secondary" className="whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">TechStore</span>
            </Link>
            <p className="text-sm mb-4">
              Your trusted destination for the latest tech products and accessories.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-sky-500 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/?category=audio" className="hover:text-white transition-colors">
                  Audio
                </Link>
              </li>
              <li>
                <Link to="/?category=computers" className="hover:text-white transition-colors">
                  Computers
                </Link>
              </li>
              <li>
                <Link to="/?category=phones" className="hover:text-white transition-colors">
                  Phones
                </Link>
              </li>
              <li>
                <Link to="/?category=wearables" className="hover:text-white transition-colors">
                  Wearables
                </Link>
              </li>
              <li>
                <Link to="/?category=cameras" className="hover:text-white transition-colors">
                  Cameras
                </Link>
              </li>
              <li>
                <Link to="/?category=accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-white mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-white transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-white transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm mb-2">Accepted Payment Methods</p>
              <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="h-10 w-20 rounded-md bg-white/95 border border-slate-200 shadow-sm flex items-center justify-center"
                  >
                    <img
                      src={method.logo}
                      alt={method.name}
                      className="h-5 max-w-[64px] w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm mb-2">Secure Shopping</p>
              <div className="flex gap-2 flex-wrap justify-center md:justify-end">
                <div className="h-8 min-w-24 px-3 rounded text-xs font-medium text-white bg-green-600 flex items-center justify-center">
                  SSL Secure
                </div>
                <div className="h-8 min-w-24 px-3 rounded text-xs font-medium text-white bg-blue-600 flex items-center justify-center">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
            <p>© 2026 TechStore. All rights reserved.</p>
            <p className="text-gray-400">Developed by Gustavo Koglin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
