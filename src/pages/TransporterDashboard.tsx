import React from 'react';
import { Truck, Calendar, Star, DollarSign } from 'lucide-react';

const TransporterDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Transporter Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <Truck size={36} className="mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Available Jobs</h2>
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm text-gray-600">New transport requests</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <Calendar size={36} className="mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Scheduled Deliveries</h2>
          <p className="text-3xl font-bold">3</p>
          <p className="text-sm text-gray-600">Upcoming deliveries</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <Star size={36} className="mb-4 text-yellow-600" />
          <h2 className="text-xl font-semibold mb-2">Rating</h2>
          <p className="text-3xl font-bold">4.8</p>
          <p className="text-sm text-gray-600">Based on 50 reviews</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-md">
          <DollarSign size={36} className="mb-4 text-purple-600" />
          <h2 className="text-xl font-semibold mb-2">Earnings</h2>
          <p className="text-3xl font-bold">$1,250</p>
          <p className="text-sm text-gray-600">This month</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Transport Requests</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Nairobi</td>
                <td className="px-6 py-4 whitespace-nowrap">Mombasa</td>
                <td className="px-6 py-4 whitespace-nowrap">485 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Fresh Produce</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Accept</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Kisumu</td>
                <td className="px-6 py-4 whitespace-nowrap">Nakuru</td>
                <td className="px-6 py-4 whitespace-nowrap">178 km</td>
                <td className="px-6 py-4 whitespace-nowrap">Grains</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Accept</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransporterDashboard;