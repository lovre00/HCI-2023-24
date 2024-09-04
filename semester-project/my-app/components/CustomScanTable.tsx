import React from 'react';

const ImportsTable = ({ importsData, malapiImportCheckData }: any) => {
  const generateTableRows = () => {
    const rows: JSX.Element[] = [];

    for (const dll in importsData) {
      const malapiData = malapiImportCheckData[dll];

      if (malapiData) {
        rows.push(
          <tr key={`${dll}-${dll}`}>
            <td style={cellStyle}>
              <FunctionPanel func={dll} malapiData={malapiData} dll={importsData[dll]} />
            </td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={`${dll}-${dll}`}>
            <td style={nonMalapiDataCellStyle}>
              {dll}
              <br />
              <span style={nonMalapiDll}>{importsData[dll]}</span>
            </td>
          </tr>
        );
      }
    }

    return rows;
  };

  const FunctionPanel = ({ func, malapiData, dll }: any) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const togglePanel = () => {
      setIsExpanded(!isExpanded);
    };

    const panelStyle: React.CSSProperties = {
      backgroundColor: '#f2f2f2',
      borderRadius: '8px',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid #ddd',
    };

    const descriptionStyle: React.CSSProperties = {
      fontSize: '12px',
      color: '#808080',
      display: 'flex',
      alignItems: 'center',
    };

    const logoStyle: React.CSSProperties = {
      height: '40px', // Set height to 40px to scale the logo while maintaining aspect ratio
      marginRight: '12px',
      objectFit: 'contain', // Ensures the logo fits within the height without being cropped
    };

    return (
      <div style={panelStyle} onClick={togglePanel}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>{func}</span>
          <span>{isExpanded ? '-' : '+'}</span>
        </div>
        <span style={nonMalapiDll}>{dll}</span>
        {isExpanded && (
          <div style={{ padding: '0px 5px 0' }}>
            <div style={descriptionStyle}>
              <img src={malapiData.logo} alt="Logo" style={logoStyle} />
              <span>{malapiData.text}</span>
            </div>
            <a href={malapiData.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {malapiData.url}
            </a>
          </div>
        )}
      </div>
    );
  };

  const tableStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
    border: '1px solid #ddd',
    fontSize: '14px', // Reduced font size by 1
  };

  const cellStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    color: '#1d4ed8', // Tailwind blue-600
    marginTop: '8px',
    textDecoration: 'underline',
  };

  const nonMalapiDataCellStyle: React.CSSProperties = {
    ...cellStyle,
    padding: '15px', // Add small padding for functions without malapi entry
  };

  const nonMalapiDll: React.CSSProperties = {
    textAlign: 'right',
    color: '#777',
    fontSize: '10px',
    padding: '5px',
  };

  return (
    <table className="table" style={tableStyle}>
      <thead>
        <tr></tr>
      </thead>
      <tbody>{generateTableRows()}</tbody>
    </table>
  );
};

export default ImportsTable;
