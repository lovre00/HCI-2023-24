// pages/contact.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactForm';
import ExcaliburComponent from '@/components/Logo';

const Contact: React.FC = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <ExcaliburComponent/>
            <ContactForm/>
        </div>
    );
};

export default Contact;
