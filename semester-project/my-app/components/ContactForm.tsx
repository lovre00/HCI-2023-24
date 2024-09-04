// components/ContactForm.tsx
"use client";
import React, { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa'; // Import icons from react-icons

interface ContactFormProps {
    onSubmit?: (formData: { name: string; email: string; message: string }) => void; // Optional onSubmit prop
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [submitted, setSubmitted] = useState(false); // New state for form submission

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Basic validation
        const newErrors: typeof errors = {};
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!message) newErrors.message = 'Message is required';
        setSubmitted(false);

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // No validation errors, call the onSubmit prop if defined
            if (onSubmit) onSubmit({ name, email, message });
            // Set submitted to true after form submission
            setSubmitted(true);
            // Clear form fields after submission
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '12px', position: 'relative', width: '100%' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '4px' }}>Name:</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaUser style={{ position: 'absolute', left: '10px', color: '#999' }} />
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        style={{ width: '100%', padding: '8px 8px 8px 40px', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                    />
                </div>
                {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
            </div>
            <div style={{ marginBottom: '12px', position: 'relative', width: '100%' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '4px' }}>Email:</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEnvelope style={{ position: 'absolute', left: '10px', color: '#999' }} />
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        style={{ width: '100%', padding: '8px 8px 8px 40px', borderRadius: '4px', border: '1px solid #ddd', boxSizing: 'border-box' }}
                    />
                </div>
                {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
            </div>
            <div style={{ marginBottom: '12px', width: '100%' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '4px' }}>Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd', height: '100px', boxSizing: 'border-box' }}
                />
                {errors.message && <p style={{ color: 'red', fontSize: '12px' }}>{errors.message}</p>}
            </div>
            <button
                type="submit"
                style={{ padding: '10px 20px', backgroundColor: '#2563EB', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
            >
                Send Message
            </button>
            {submitted && <p style={{ color: 'green', marginTop: '12px', fontSize: '12px'}}>Thanks, we'll get back to you as soon as possible!</p>} {/* Thank you message */}
        </form>
    );
};

export default ContactForm;
