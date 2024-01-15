import React from 'react';
import styles from './RenderTable.module.css';

interface RenderTableProps {
  data: any;
  headers?: string[]; // Optional prop for table headers
}

const RenderTable: React.FC<RenderTableProps> = ({ data, headers }: RenderTableProps) => {
  // Recursive function to render JSON data as a table
  const renderJSONAsTable = (jsonData: any) => {
    return (
      <table className={styles.jsontable}>
        <thead>
          {headers && headers.length === 2 && (
            <tr>
              <th className="text-left">{headers[0]}</th>
              <th className="text-right">{headers[1]}</th>
            </tr>
          )}
        </thead>
        <tbody>
          {Object.keys(jsonData).map((key) => (
            <tr key={key} className="data-row">
              <td className="text-sm text-stone-700">{key}</td>
              <td className="value text-sm text-right">
                {typeof jsonData[key] === 'object' ? (
                  // Render nested object or array
                  <RenderTable data={jsonData[key]} />
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

export default RenderTable;
