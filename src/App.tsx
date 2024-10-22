import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import TransporterDashboard from './pages/TransporterDashboard';
import ProductListing from './pages/ProductListing';
import OrderPlacement from './pages/OrderPlacement';
import TransportRequest from './pages/TransportRequest';
import Messaging from './pages/Messaging';
import ReportDisease from './pages/ReportDisease';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/buyer" element={<BuyerDashboard />} />
          <Route path="/transporter" element={<TransporterDashboard />} />
          <Route path="/list-product" element={<ProductListing />} />
          <Route path="/place-order" element={<OrderPlacement />} />
          <Route path="/request-transport" element={<TransportRequest />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/report-disease" element={<ReportDisease />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;