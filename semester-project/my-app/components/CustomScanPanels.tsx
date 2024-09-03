import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface CustomScanPanelsProps {
    data: Record<string, any>;
}

const CustomScanPanels: React.FC<CustomScanPanelsProps> = ({ data }) => {
    // Hook to check if the screen width is less than or equal to 768px
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const gridContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', // 1 column on small screens, 3 columns on larger screens
        gap: '16px', // Space between panels
        width: '100%',
    };

    const panelStyle: React.CSSProperties = {
        backgroundColor: '#f9f9fa', // Light gray background
        border: '1px solid #d1d5db', // Gray border
        borderRadius: '8px',
        padding: '16px',
        boxSizing: 'border-box', // Include padding and border in width and height
        height: 'auto', // Allow the height to be determined by content
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '8px',
    };

    const valueStyle: React.CSSProperties = {
        fontSize: '11px',
        color: '#4b5563', // Gray text color
    };

    return (
        <div style={gridContainerStyle as React.CSSProperties}>
            {Object.entries(data).map(([key, value], index) => (
                <div key={index} style={panelStyle}>
                    <div style={titleStyle}>{key}</div>
                    <div style={valueStyle}>
                        {Array.isArray(value) ? (
                            <ul style={{ listStyleType: 'disc', paddingLeft: '16px' }}>
                                {value.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '4px' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <span>{value.toString()}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomScanPanels;
