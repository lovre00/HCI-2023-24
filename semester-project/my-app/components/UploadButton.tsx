"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UploadButton = () => {
  const router = useRouter();
  const [choose, setChosen] = useState(false);
  const [confirm, setConfirmed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textColor, setTextColor] = useState('text-blue-500');

  const handleFileUpload = () => {
    if (!choose) {
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.onchange = (event) => {
        const target = event.target as HTMLInputElement; // Type assertion
        if (target && target.files && target.files.length > 0) {
          setChosen(true);
        }
      };
      inputElement.click();
    } else if (choose && !confirm) {
      setConfirmed(true);
      startProgressBar();
    }
  };

  const startProgressBar = () => {
    let currentProgress = 0;
    setTextColor('text-blue-600');
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        router.push('/file'); // Redirect to '/file' after progress completes
      } else if (currentProgress >= 50) {
        setTextColor('text-white'); // Change text color to white
      }
    }, 10); // 40ms interval to reach 100 in 4 seconds
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
      {(!choose || !confirm) && (
        <button
          className={`w-64 h-12 border-2 border-blue-500 rounded-md transition duration-300 ease-in-out ${
            choose
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-white text-blue-500 hover:bg-blue-100'
          }`}
          onClick={handleFileUpload}
        >
          {choose ? 'Confirm upload' : 'Choose file to upload'}
        </button>
      )}
      {confirm && (
        <div className="w-64 h-12 border-2 border-blue-500 rounded-md bg-white overflow-hidden relative">
          <div
            className="h-full bg-blue-500 absolute top-0 left-0"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          />
          {progress >= 0 && (
            <span className={`absolute inset-0 flex items-center justify-center ${textColor}`}>
              {progress}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadButton;
