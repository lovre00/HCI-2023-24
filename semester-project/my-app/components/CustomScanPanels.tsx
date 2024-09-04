import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image'; // Importing Image from next/image
import jsonData from '../assets/pe.json'; // Importing the JSON file
import infoIcon from '../assets/info.png'; // Importing the info icon
import styles from './CustomScanPanels.module.css'; // Importing the CSS module

// Define the types for the JSON data
interface JsonDataItem {
    title: string;
    explanation: string;
}

interface JsonData {
    [key: string]: JsonDataItem;
}

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

    return (
        <div style={gridContainerStyle as React.CSSProperties}>
            {Object.entries(data).map(([key, value], index) => {
                const info = (jsonData as JsonData)[key]; // Type-cast jsonData to JsonData

                return (
                    <div key={index} className={styles.panel}>
                        <div className={styles.title}>
                            {info ? (
                                <>
                                    {info.title}
                                    &nbsp;
                                    <Image
                                        src={infoIcon}
                                        alt="Info"
                                        className={styles.infoIcon}
                                        width={16}
                                        height={16}
                                    />
                                    <div className={styles.tooltip}>
                                        {info.explanation}
                                    </div>
                                </>
                            ) : (
                                <>{key}</>
                            )}
                        </div>
                        <div style={{ fontSize: '11px', color: '#4b5563' }}>
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
