import React, { useState } from 'react';

interface ImportsTableProps {
  imports: any;
  malapiImportCheck: any;
}

const ImportsTable: React.FC<ImportsTableProps> = ({ imports, malapiImportCheck }: ImportsTableProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const togglePanel = (funcName: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(funcName) ? prevExpanded.filter((item) => item !== funcName) : [...prevExpanded, funcName]
    );
  };

  const renderFunctionPanel = (funcName: string) => {
    const functionData = malapiImportCheck[funcName];
    const isExpanded = expanded.includes(funcName);
    const hasDescription = functionData && functionData.description;

    return (
      <div
        key={funcName}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '5px',
          cursor: hasDescription ? 'pointer' : 'not-allowed',
          borderRadius: '8px',
        }}
        onClick={() => hasDescription && togglePanel(funcName)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            {funcName}
            {functionData && functionData.info && (
              <span style={{ fontSize: '12px', color: '#888', display: 'block' }}>{functionData.info}</span>
            )}
          </span>
          {hasDescription && <span style={{ fontSize: '18px' }}>{isExpanded ? '-' : '+'}</span>}
        </div>
        {isExpanded && hasDescription && (
          <div style={{ marginTop: '5px', wordWrap: 'break-word', fontSize: '14px' }}>
            <strong>Description:</strong> {functionData.description}
          </div>
        )}
      </div>
    );
  };

  const tableStyle: React.CSSProperties = {
    borderSpacing: '0',
    borderCollapse: 'collapse', // Specify the correct values for borderCollapse
    width: '100%',
    marginTop: '15px',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #ccc', // Add border to the main table
  };
  const renderImportsTable = () => {
    const rows = Object.keys(imports).map((dllName, index) => {
      const functions = imports[dllName].map((funcName: string) => (
        <div key={funcName}>{renderFunctionPanel(funcName)}</div>
      ));

      return (
        <tr key={dllName} style={{ background: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
          <td style={{ border: '1px solid #ccc', padding: '8px', minWidth: '150px' }}>{dllName}</td>
          <td style={{ border: '1px solid #ccc', padding: '8px', maxWidth: '400px' }}>{functions}</td>
        </tr>
      );
    });

    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>DLL</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Functions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return <div>{renderImportsTable()}</div>;
};

export default ImportsTable;
