
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UploadButton = () => {
  const router = useRouter();
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = () => {
    if (!uploaded) {
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.onchange = (event) => {
        setUploaded(true);
        // console.log('Selected file:', event.target.files?.[0]);
      };
      inputElement.click();
    } else {
      router.push('/file'); // Redirect to '/file' if already uploaded and confirmed
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
       <p className="text-sm text-gray-600 mb-2 w-64 justify-center text-center">
        Scan executable file for common signatures, get PE info, detailed entropy overview and more.
      </p>
      <div className="w-64 h-64 border-dashed border-2 rounded-lg border-gray-400 flex items-center justify-center mb-4">
        Drag & drop file here
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
