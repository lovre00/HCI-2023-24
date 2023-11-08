"use client";

import { useState } from 'react';

const UploadButton = () => {
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.onchange = (event) => {
      setUploaded(true);
      // console.log('Selected file:', event.target.files?.[0]);
    };
    inputElement.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
        {/* Placeholder logo image */}
        <img src="https://via.placeholder.com/150" alt="Logo" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="w-64 h-64 border-dashed border-2 border-gray-400 flex items-center justify-center mb-4">
        Drag and drop your files here
      </div>
      <p className="text-gray-500 text-lg my-4">or</p>
      <button
        className={`w-64 h-12 border-2 border-blue-500 rounded-md transition duration-300 ease-in-out ${
          uploaded ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
        onClick={handleFileUpload}
      >
        {uploaded ? 'Confirm upload' : 'Choose file to upload'}
      </button>
    </div>
  );
};

export default UploadButton;
