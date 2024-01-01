"use client";
import { useState } from 'react';
import styles from './Panel.module.css';

const CollapsiblePanel = ({ title, type, text, children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  let panelType = "defaultpanel";
  let icon = '';

  if (type == 'warning') {
    panelType = "warningpanel";
    icon = 'https://i.postimg.cc/d17YgmV9/warning-small.png';
  }

  return (
    <div className={panelType}>
      <div className={type} onClick={toggleCollapse}>
        <div className="title">
          {icon && <img src={icon} alt={`${type} icon`} className="icon" />}{title}
        </div>
        <div className="collapse-toggle">{isCollapsed ? '+' : '-'}</div>
      </div>
      {!isCollapsed && (
        <div className="content">
          {children}
        </div>
      )}
      <style jsx>{`
        .icon {
          margin-right: 5px;
          max-width: 20px;
          max-height: 20px;
          vertical-align: middle;
        }
        .defaultpanel {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 100%; /* Set the width to 50% or adjust as needed */
          border-radius: 5px; /* Rounded borders */
          overflow: hidden; /* Hide content overflow */
          align-items: center;
          max-width: 900px;
        }
        .warningpanel {
          border: 1px solid #ffcc00;
          margin-bottom: 10px;
          width: 100%; /* Set the width to 50% or adjust as needed */
          border-radius: 5px; /* Rounded borders */
          overflow: hidden; /* Hide content overflow */
          align-items: center;
          max-width: 900px;
        }

        @media screen and (max-width: 600px) {
          .defaultpanel {
            border: 1px solid #ccc;
            margin-bottom: 10px;
            width: 90%; /* Set the width to 50% or adjust as needed */
            border-radius: 5px; /* Rounded borders */
            overflow: hidden; /* Hide content overflow */
          }
        }
        .default {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          background-color: #f0f0f0; /* Color of the upper part of the panel */
        }
        .warning {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          background-color: #ffe57f; /* Color of the upper part of the panel */
        }
        .error {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 50%; /* Set the width to 50% or adjust as needed */
          border-radius: 5px; /* Rounded borders */
          overflow: hidden; /* Hide content overflow */
          background-color: #ffa1a1;
        }
        .errorheader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          color: #ffffff;
          background-color: #db5151; /* Color of the upper part of the panel */
        
        }
        .title {
          padding: 5px;
          font-weight: bold;
          font-size: 15px;
          display: flex;
          align-items: center;
        }
        .collapse-toggle {
          padding: 5px 10px;
          background-color: transparent; /* Transparent background for the button */
          cursor: pointer;
          font-size: 18px;
          color: gray;
        }
        .content {
          padding: 10px;
          width:100%;
        }
        .data-row {
          display: flex;
          margin-bottom: 5px;
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
