import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Truck, MessageCircle } from 'lucide-react';

const BuyerDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Buyer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/place-order" className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Search size={36} className="mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Find Products</h2>
          <p>Search and browse available products</p>
        </Link>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <ShoppingBag size={36} className="mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">My Orders</h2>
          <p>Active Orders: 2</p>
          <p>Completed Orders: 15</p>
        </div>
        <Link to="/request-transport" className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <Truck size={36} className="mb-4 text-yellow-600" />
          <h2 className="text-xl font-semibold mb-2">Request Transport</h2>
          <p>Arrange transportation for your purchases</p>
        </Link>
        <Link to="/messages" className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <MessageCircle size={36} className="mb-4 text-purple-600" />
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p>Communicate with farmers and transporters</p>
        </Link>
      </div>
    </div>
  );
};

export default BuyerDashboard;