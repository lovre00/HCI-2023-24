"use client";
import { useState } from 'react';

const RenderData = ({ sections }: any) => {
    const sectionKeys = Object.keys(sections);

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Section Name</th>
              <th className="border p-2">Size of Raw Data</th>
              <th className="border p-2">Pointer to Raw Data</th>
              <th className="border p-2">Virtual Size</th>
              <th className="border p-2">Virtual Address</th>
              <th className="border p-2">Execute</th>
              <th className="border p-2">Read</th>
              <th className="border p-2">Write</th>
            </tr>
          </thead>
          <tbody>
            {sectionKeys.map((sectionKey, index) => (
              <tr
                key={sectionKey}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="border p-2">{sectionKey}</td>
                <td className="border p-2">{sections[sectionKey].sizeofrawdata}</td>
                <td className="border p-2">{sections[sectionKey].pointertorawdata}</td>
                <td className="border p-2">{sections[sectionKey].virtualsize}</td>
                <td className="border p-2">{sections[sectionKey].virtualaddress}</td>
                <td className="border p-2">{sections[sectionKey].execute}</td>
                <td className="border p-2">{sections[sectionKey].read}</td>
                <td className="border p-2">{sections[sectionKey].write}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const Table = ({ title, data, type }: any) => {
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
  } else if (type == 'default')
  {
    headerType = 'header'
    borderType = 'default'
  }

  return (
    <div className={type}>
      <div className={headerType} onClick={toggleCollapse}>
        <div className="title">{label} {title}</div>
        <div className="collapse-toggle">{isCollapsed ? 'Expand' : 'Collapse'}</div>
      </div>
      {!isCollapsed && (
        <div className="content">
          <RenderData sections={data}/>
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

export default Table;
