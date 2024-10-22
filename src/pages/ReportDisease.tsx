import React, { useState } from 'react';
import { Camera, Upload, AlertTriangle } from 'lucide-react';

const ReportDisease = () => {
  const [cropType, setCropType] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [affectedArea, setAffectedArea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle disease report submission
    console.log({ cropType, symptoms, affectedArea });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Report Crop Disease</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
          <input
            type="text"
            id="cropType"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">Observed Symptoms</label>
          <textarea
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="affectedArea" className="block text-sm font-medium text-gray-700 mb-1">Affected Area (square meters)</label>
          <input
            type="number"
            id="affectedArea"
            value={affectedArea}
            onChange={(e) => setAffectedArea(e.target.value)}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images</label>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Camera className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center justify-center">
          <AlertTriangle className="mr-2" />
          Report Disease
        </button>
      </form>
    </div>
  );
};

export default ReportDisease;