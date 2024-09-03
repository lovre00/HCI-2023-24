'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UploadButton = () => {
  const router = useRouter();
  const [choose, setChosen] = useState(false);
  const [confirm, setConfirmed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textColor, setTextColor] = useState('text-blue-500');
  const [filename, setFilename] = useState(''); // State to store the filename

  const handleFileUpload = () => {
    if (!choose) {
      const inputElement = document.createElement('input');
      inputElement.type = 'file';
      inputElement.onchange = (event) => {
        const target = event.target as HTMLInputElement; // Type assertion
        if (target && target.files && target.files.length > 0) {
          setChosen(true);
          setFilename(target.files[0].name); // Set filename state
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
        router.push('/file?status=ok'); // Redirect to '/file' after progress completes
      } else if (currentProgress >= 50) {
        setTextColor('text-white'); // Change text color to white
      }
    }, 10); // 40ms interval to reach 100 in 4 seconds
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <p className="text-sm text-gray-600 mb-2 w-64 text-center">
        Scan executable file for common signatures, get PE info, detailed entropy overview and more.
      </p>
      {/* Drag and Drop Panel - Shown on Desktop */}
      <div className="hidden md:flex md:w-64 md:h-64 md:border-dashed md:border-2 md:border-gray-400 md:rounded-lg md:items-center md:justify-center md:mb-4">
        {!choose ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="https://i.postimg.cc/65JRPB0R/101671.png"
              alt="Drag & Drop"
              className="w-16 h-auto"
              style={{ maxWidth: '64px' }} // Ensure width is 64px and height is adjusted to maintain aspect ratio
            />
            <span className="mt-2">Drag & drop file here</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="https://i.postimg.cc/65JRPB0R/101671.png"
              alt="File chosen"
              className="w-16 h-auto"
              style={{ maxWidth: '64px' }} // Ensure width is 64px and height is adjusted to maintain aspect ratio
            />
            <p className="text-gray-700 mt-2">{filename}</p>
          </div>
        )}
      </div>
      {/* Placeholder Image - Shown on Mobile */}
      <div className="md:hidden w-64 h-64 border-2 border-dashed rounded-lg border-gray-400 flex flex-col items-center justify-center mb-4">
        {!choose ? (
          <img
            src="https://i.postimg.cc/65JRPB0R/101671.png"
            alt="Placeholder"
            className="w-16 h-auto"
            style={{ maxWidth: '64px' }} // Ensure width is 64px and height is adjusted to maintain aspect ratio
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img
              src="https://i.postimg.cc/65JRPB0R/101671.png"
              alt="File chosen"
              className="w-16 h-auto"
              style={{ maxWidth: '64px' }} // Ensure width is 64px and height is adjusted to maintain aspect ratio
            />
            <p className="text-gray-700 mt-2">{filename}</p>
          </div>
        )}
      </div>
      {/* "or" Text - Hidden on Mobile */}
      <p className="hidden md:text-gray-500 md:text-lg md:my-4">or</p>
      {/* File Upload Button */}
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
      {/* Progress Bar */}
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
