'use client';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const CircleButton = styled(motion.button)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #2196F3;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const UploadButton: React.FC = () => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileUpload = () => {
    // Handle file upload logic here
    setIsFileUploaded(true);
  };

  return (
    <CircleButton
      whileHover={{ scale: 1.1, backgroundColor: isFileUploaded ? '#4CAF50' : '#1976D2' }}
      whileTap={{ scale: 0.9 }}
      onClick={handleFileUpload}
    >
      {isFileUploaded ? 'Choose file' : 'Scan file'}
    </CircleButton>
  );
};

export default UploadButton;