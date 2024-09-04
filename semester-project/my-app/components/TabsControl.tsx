'use client';
import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import client from './contentfulClient'; // Import your Contentful client
import styles from './TabsControl.module.css';
import { MARKS } from '@contentful/rich-text-types';

const TabsControl = () => {
    const [tabsData, setTabsData] = useState<TabData[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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

        handleResize(); // Set the initial value
        window.addEventListener('resize', handleResize); // Add resize event listener
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    interface TabData {
        id: string;
        title: string;
        content: any; // Replace 'any' with the actual type of your content
    }

    return (
        <div className={styles.tabsControl}>
            {!isMobile && (
                <div className={styles.tabMenu}>
                    {tabsData.map((tab: TabData) => (
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
                    {/* Dropdown Menu for Mobile */}
                    <select
                        value={activeTab || ''}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        {tabsData.map((tab: TabData) => (
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
                        content={tabsData.find((tab) => tab.id === activeTab)?.content}
                    />
                )}
            </div>
        </div>
    );
};

// Component to render the Rich Text content
const TabContent = ({ content }: { content: any }) => {
    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node: any, children: any) => (
                <h2 id={node.content[0].value.replace(/\s+/g, '-').toLowerCase()}>{children}</h2>
            ),
            [BLOCKS.QUOTE]: (node: any, children: any) => (
                <blockquote>{children}</blockquote>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
                if (node.data.target.sys.contentType.sys.id === 'code') {
                    const codeSnippet = node.data.target.fields.snippet;
                    return (
                        <div className={styles.codeBlock}>
                            <pre><code>{codeSnippet}</code></pre>
                        </div>
                    );
                }
            },
        },
    };

    return <div className={styles.tabContent}>{documentToReactComponents(content, options)}</div>;
};

export default TabsControl;
