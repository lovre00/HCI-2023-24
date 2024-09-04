'use client';
import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { FaChevronDown } from 'react-icons/fa'; // Import dropdown icon
import client from './contentfulClient'; // Import your Contentful client
import styles from './TabsControl.module.css';

const TabsControl = () => {
    const [tabsData, setTabsData] = useState<TabData[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false); // Default to false

    // Fetch data from Contentful
    useEffect(() => {
        const fetchTabsData = async () => {
            const response = await client.getEntries({
                content_type: 'tab' // Replace with your content type ID
            });
            const formattedData = response.items.map((item: any) => ({
                id: item.sys.id,
                title: item.fields.title,
                content: item.fields.content, // Rich Text content
            }));
            console.log(formattedData);
            setTabsData(formattedData);
            setActiveTab(formattedData[0]?.id); // Set the first tab as active by default
        };
        fetchTabsData();
    }, []);

    // Check if the screen width is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };
        
        // Initialize the state on mount
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    interface TabData {
        id: string;
        title: string;
        content: any; // Replace 'any' with the actual type of your content
    }

    // Render
    return (
        <div className={styles.tabsControl}>
            {!isMobile && (
                <div className={styles.tabMenu}>
                    {tabsData.map((tab: any) => (
                        <React.Fragment key={tab.id}>
                            <button
                                className={tab.id === activeTab ? styles.activeTab : ''}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.title}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
            )}
            {isMobile && (
                <div className={styles.dropdownMenu}>
                    {/* Custom Dropdown Menu for Mobile */}
                    <FaChevronDown className={styles.dropdownIcon} /> {/* Custom dropdown icon */}
                    <select
                        value={activeTab || ''}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        {tabsData.map((tab: any) => (
                            <option key={tab.id} value={tab.id}>
                                {tab.title}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <div className={styles.scrollableContent}>
                {activeTab && (
                    <TabContent
                        content={tabsData.find((tab: any) => tab.id === activeTab)?.content}
                    />
                )}
            </div>
        </div>
    );
};

// Component to render the Rich Text content
const TabContent = ({ content }: any) => {
    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node:any, children:any) => (
                <h2 id={node.content[0].value.replace(/\s+/g, '-').toLowerCase()}>{children}</h2>
            ),
            [BLOCKS.QUOTE]: (node:any, children:any) => (
                <blockquote>{children}</blockquote>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node:any) => {
                console.log(node.data.target.sys.contentType.sys.id);
                if (node.data.target.sys.contentType.sys.id === 'code') {
                    const codeSnippet = node.data.target.fields.snippet;
                    return (
                        <div className={styles.codeBlock}>
                            <pre><code>{codeSnippet}</code></pre>
                        </div>
                    );
                }
                if (node.data.target.sys.contentType.sys.id === 'image') {
                    // Debugging: Log the embedded image node
                    console.log('Embedded Image Node:', node);
                    
                    // Extract URL and alt text from fields
                    const image = node.data.target.fields.file;
                    const imageUrl = image ? image.url : '';
                    const imageAlt = node.data.target.fields.title || 'Embedded image';
                    
                    // Debugging: Log image details
                    console.log('Image URL:', imageUrl);
                    console.log('Image Alt Text:', imageAlt);
                    
                    return (
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className={styles.embeddedImage}
                        />
                    );
                }
            },
        },
    };

    return (
        <div className={styles.tabContent}>
            {documentToReactComponents(content, options)}
        </div>
    );
};

export default TabsControl;
