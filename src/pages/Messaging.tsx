import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Messaging = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle message submission
    console.log({ message });
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
        <div className="w-1/3 border-r">
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ul className="divide-y divide-gray-200">
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="text-sm font-medium">John Doe</h3>
                  <p className="text-xs text-gray-500">Last message: 2 hours ago</p>
                </div>
              </div>
            </li>
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h3 className="text-sm font-medium">Jane Smith</h3>
                  <p className="text-xs text-gray-500">Last message: Yesterday</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full mr-2" />
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Hello! I'm interested in your tomatoes. Are they still available?</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 ml-10">2 hours ago</p>
            </div>
            <div className="mb-4 flex justify-end">
              <div className="flex items-start mb-2">
                <div className="bg-blue-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Yes, they are! How many kilos would you like?</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-start mb-2">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-8 h-8 rounded-full mr-2" />
                <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                  <p className="text-sm">Great! I'd like to order 10 kilos. Can you arrange for delivery?</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 ml-10">1 hour ago</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;