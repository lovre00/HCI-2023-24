import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image'; // Importing Image from next/image
import jsonData from '../assets/pe.json'; // Importing the JSON file
import infoIcon from '../assets/info.png'; // Importing the info icon

interface CustomScanPanelsProps {
    data: Record<string, any>;
}

const CustomScanPanels: React.FC<CustomScanPanelsProps> = ({ data }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const gridContainerStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '16px',
        width: '100%',
    };

    const panelStyle: React.CSSProperties = {
        backgroundColor: '#f9f9fa',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px',
        boxSizing: 'border-box',
        height: 'auto',
        position: 'relative', // Added to position the tooltip relative to the panel
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
    };

    const valueStyle: React.CSSProperties = {
        fontSize: '11px',
        color: '#4b5563',
    };

    const infoIconStyle: React.CSSProperties = {
        marginLeft: '8px',
        cursor: 'pointer',
    };

    const tooltipStyle: React.CSSProperties = {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: '#333',
        color: '#fff',
        padding: '8px',
        borderRadius: '4px',
        whiteSpace: 'nowrap',
        display: 'none',
        zIndex: 1000,
    };

    const panelHoverStyle: React.CSSProperties = {
        ':hover': {
            '.tooltip': {
                display: 'block',
            },
        },
    };

    return (
        <div style={gridContainerStyle as React.CSSProperties}>
            {Object.entries(data).map(([key, value], index) => {
                const info = jsonData[key];
                return (
                    <div key={index} style={panelStyle}>
                        <div style={titleStyle}>
                            {info ? (
                                <>
                                    {info.title}
                                    <Image
                                        src={infoIcon}
                                        alt="Info"
                                        style={infoIconStyle}
                                        width={16}
                                        height={16}
                                        onMouseOver={(e) => {
                                            const tooltip = e.currentTarget.nextElementSibling;
                                            if (tooltip) (tooltip as HTMLElement).style.display = 'block';
                                        }}
                                        onMouseOut={(e) => {
                                            const tooltip = e.currentTarget.nextElementSibling;
                                            if (tooltip) (tooltip as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                    <div style={tooltipStyle} className="tooltip">
                                        {info.explanation}
                                    </div>
                                </>
                            ) : (
                                <>{key}</>
                            )}
                        </div>
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
                );
            })}
        </div>
    );
};

export default CustomScanPanels;
