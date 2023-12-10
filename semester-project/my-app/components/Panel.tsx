"use client";
import { useState } from 'react';
import styles from './Panel.module.css';

const RenderData = ({ data }: any) => {
  // Recursive function to render JSON data as a table
  const renderJSONAsTable = (jsonData: any) => {
    return (
      <table className={styles.jsontable}>
        <tbody>
          {Object.keys(jsonData).map((key) => (
            <tr key={key} className="data-row">
              <td className="font-bold text-sm text-stone-700">{key}</td>
              <td className="value text-sm text-right">
                {typeof jsonData[key] === 'object' ? (
                  // Render nested object or array
                  <RenderData key={key} data={jsonData[key]} />
                ) : (
                  // Render value
                  jsonData[key]
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return renderJSONAsTable(data);
};

const CollapsiblePanel = ({ title, data, type }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  var headerType = '';
  var borderType = '';
  var label = ''

  if (type == 'error') {
    headerType = 'errorheader'
    borderType = 'error'
    label = '✖'
  } else if (type == 'default')
  {
    headerType = 'header'
    borderType = 'default'
    label = '✔'
  }

  return (
    <div className={type}>
      <div className={headerType} onClick={toggleCollapse}>
        <div className="title">{label} {title}</div>
        <div className="collapse-toggle">{isCollapsed ? 'Expand' : 'Collapse'}</div>
      </div>
      {!isCollapsed && (
        <div className="content">
          <RenderData data={data}/>
          {data.imageUrl && <img src={data.imageUrl} alt="Image" className="image" />}
        </div>
      )}
      <style jsx>{`
        .default {
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 100%; /* Set the width to 50% or adjust as needed */
          border-radius: 5px; /* Rounded borders */
          overflow: hidden; /* Hide content overflow */
          align-items: center;
          max-width: 900px;
        }

        @media screen and (max-width: 600px) {
          .default {
            border: 1px solid #ccc;
            margin-bottom: 10px;
            width: 90%; /* Set the width to 50% or adjust as needed */
            border-radius: 5px; /* Rounded borders */
            overflow: hidden; /* Hide content overflow */
          }
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          background-color: #f0f0f0; /* Color of the upper part of the panel */
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
          font-weight: bold;
        }
        .collapse-toggle {
          padding: 5px 10px;
          background-color: transparent; /* Transparent background for the button */
          cursor: pointer;
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
