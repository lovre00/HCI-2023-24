'use client';
import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import client from './contentfulClient'; // Import your Contentful client
import styles from './TabsControl.module.css';
import { MARKS } from '@contentful/rich-text-types'

const find = (array: any[], condition: (item: any) => boolean) => {
    return array.find(item => condition(item));
};

const TabsControl = () => {
    const [tabsData, setTabsData] = useState<TabData[]>([]);
    const [activeTab, setActiveTab] = useState<string | null>(null);

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
                subtabs: extractSubTabs(item.fields.content) // Extract subtabs from content
            }));
            console.log(formattedData);
            setTabsData(formattedData);
            setActiveTab(formattedData[0]?.id); // Set the first tab as active by default
        };
        fetchTabsData();
    }, []);

    interface TabData {
        id: string;
        title: string;
        content: any; // Replace 'any' with the actual type of your content
        subtabs: any[]; // Replace 'any' with the actual type of your subtabs
    }    

    interface SubTab {
        id: string;
        title: string;
        anchor: string;
    }    

    // Extract subtabs from Rich Text content
    const extractSubTabs = (richTextContent: any) => {
        const subtabs: SubTab[] = [];
        if (richTextContent && richTextContent.content) {
            richTextContent.content.forEach((node: any) => {
                if (node.nodeType === BLOCKS.HEADING_2) {
                    const headingText = node.content[0].value;
                    subtabs.push({
                        id: `subtab-${headingText.replace(/\s+/g, '-').toLowerCase()}`,
                        title: headingText,
                        anchor: headingText.replace(/\s+/g, '-').toLowerCase()
                    });
                }
            });
        }
        return subtabs;
    };

    // Scroll to anchor function
    const scrollToAnchor = (anchorId: any) => {
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
            anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Render
    return (
        <div className={styles.tabsControl}>
            <div className={styles.tabMenu}>
                {tabsData.map((tab: any) => (
                    <React.Fragment key={tab.id}>
                        <button
                            className={tab.id === activeTab ? styles.activeTab : ''}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                        {tab.id === activeTab && tab.subtabs.map((subtab: any) => (
                            <button
                                key={subtab.id}
                                className={styles.subTab}
                                onClick={() => scrollToAnchor(subtab.anchor)}
                            >
                                {subtab.title}
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.scrollableContent}> {/* Apply the scrollableContent class */}
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
                // Check if the embedded entry is of the "code" content type
                if (node.data.target.sys.contentType.sys.id === 'code') {
                    // Extract the code snippet
                    const codeSnippet = node.data.target.fields.snippet;

                    // Return a styled code block
                    return (
                        <div className={styles.codeBlock}>
                            <pre><code>{codeSnippet}</code></pre>
                        </div>
                    );
                }
                // Handle other embedded entries if necessary
            },

            // Add other rendering options as needed
        },
        // Add other options as needed
    };

    return (
        <div className={styles.tabContent}>
            {documentToReactComponents(content, options)}
        </div>
    );
};

export default TabsControl;
