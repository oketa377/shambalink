import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingCart, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to ShambaLink</h1>
      <p className="text-xl mb-8">Connecting farmers, buyers, and transporters for a thriving agricultural ecosystem</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link to="/farmer" className="bg-green-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Sprout size={48} className="mx-auto mb-4 text-green-600" />
          <h2 className="text-2xl font-semibold mb-2">Farmers</h2>
          <p>List your products and connect with buyers</p>
        </Link>
        <Link to="/buyer" className="bg-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <ShoppingCart size={48} className="mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-semibold mb-2">Buyers</h2>
          <p>Find and purchase quality agricultural products</p>
        </Link>
        <Link to="/transporter" className="bg-yellow-100 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Truck size={48} className="mx-auto mb-4 text-yellow-600" />
          <h2 className="text-2xl font-semibold mb-2">Transporters</h2>
          <p>Offer your services to move goods efficiently</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;