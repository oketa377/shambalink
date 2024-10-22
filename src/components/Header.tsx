import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingCart, Truck, MessageCircle, Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Sprout className="mr-2" />
          ShambaLink
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/farmer" className="flex items-center"><Sprout className="mr-1" /> Farmer</Link></li>
            <li><Link to="/buyer" className="flex items-center"><ShoppingCart className="mr-1" /> Buyer</Link></li>
            <li><Link to="/transporter" className="flex items-center"><Truck className="mr-1" /> Transporter</Link></li>
            <li><Link to="/messages" className="flex items-center"><MessageCircle className="mr-1" /> Messages</Link></li>
            <li><button className="flex items-center"><Globe className="mr-1" /> Language</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;