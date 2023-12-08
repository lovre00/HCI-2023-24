"use client";
import { useState } from 'react';

const CollapsiblePanel = ({ title, data }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible-panel">
      <div className="header" onClick={toggleCollapse}>
        <div className="title">{title}</div>
        <div className="collapse-toggle">{isCollapsed ? 'Expand' : 'Collapse'}</div>
      </div>
      {!isCollapsed && (
        <div className="content">
          {Object.keys(data).map((key) => (
            <div key={key} className="data-row">
              <div className="label">{key}:</div>
              <div className="value">{data[key]}</div>
            </div>
          ))}
          {data.imageUrl && <img src={data.imageUrl} alt="Image" className="image" />}
        </div>
      )}
      <style jsx>{`
        .collapsible-panel {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 50%; /* Set the width to 50% or adjust as needed */
          border-radius: 5px; /* Rounded borders */
          overflow: hidden; /* Hide content overflow */
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          background-color: #f0f0f0; /* Color of the upper part of the panel */
          border-bottom: 1px solid #ccc; /* Border color */
        }
        .title {
          font-weight: bold;
        }
        .collapse-toggle {
          padding: 5px 10px;
          background-color: transparent; /* Transparent background for the button */
          cursor: pointer;
        }
        .collapse-toggle:hover {
          background-color: #e0e0e0; /* Background color on hover */
        }
        .content {
          padding: 10px;
        }
        .data-row {
          display: flex;
          margin-bottom: 5px;
        }
        .label {
          font-weight: bold;
          width: 120px;
        }
        .image {
          max-width: 100%;
          height: auto;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default CollapsiblePanel;
