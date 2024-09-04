'use client';
import ExcaliburComponent from '@/components/Logo';
import Navbar from '../../components/Navbar';
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const About = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <Navbar />
                <ExcaliburComponent/>
            </div>
            <section className="p-6 border-2 border-blue-500 rounded-lg w-full max-w-lg">
                <p className="text-gray-700 mb-6 text-center">
                    Excalibur EXE File Analysis Suite is a comprehensive tool designed to analyze and dissect executable files. It provides in-depth insights into the structure, behavior, and potential threats of executable files, helping users to understand and manage their software environments effectively. Whether you're dealing with malware analysis, debugging, or general file inspection, Excalibur offers a robust set of features to enhance your file analysis capabilities.
                </p>

                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-blue-500 text-xl" />
                        <span className="text-gray-800">contact@excalibur.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-blue-500 text-xl" />
                        <span className="text-gray-800">+1 (123) 456-7890</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-blue-500 text-xl" />
                        <span className="text-gray-800">1234 Software Blvd, Tech City, TX</span>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
