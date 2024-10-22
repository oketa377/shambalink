import React from 'react';
import { Link } from 'react-router-dom';
import { ListPlus, DollarSign, AlertTriangle, Star } from 'lucide-react';

const FarmerDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Farmer Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/list-product" className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <ListPlus size={36} className="mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">List Product</h2>
          <p>Add new products to your inventory</p>
        </Link>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <DollarSign size={36} className="mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
          <p>Total Sales: $5,230</p>
          <p>Pending Orders: 3</p>
        </div>
        <Link to="/report-disease" className="bg-red-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <AlertTriangle size={36} className="mb-4 text-red-600" />
          <h2 className="text-xl font-semibold mb-2">Report Crop Disease</h2>
          <p>Get help with identifying and treating crop diseases</p>
        </Link>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <Star size={36} className="mb-4 text-yellow-600" />
          <h2 className="text-xl font-semibold mb-2">Reputation</h2>
          <p>Rating: 4.8/5</p>
          <p>Total Reviews: 27</p>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;