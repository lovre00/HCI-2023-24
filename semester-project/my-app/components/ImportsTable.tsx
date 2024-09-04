import React from 'react';

const ImportsTable = ({ importsData, malapiImportCheckData }: any) => {
  const generateTableRows = () => {
    const rows: JSX.Element[] = [];

    for (const dll in importsData) {
      importsData[dll].forEach((func: any, index: any) => {
        const malapiData = malapiImportCheckData[func];

        if (malapiData) {
          rows.push(
            <tr key={`${func}-${dll}`}>
              <td style={cellStyle}>
                <FunctionPanel func={func} malapiData={malapiData} dll={dll} />
              </td>
            </tr>
          );
        } else {
          rows.push(
            <tr key={`${func}-${dll}`}>
              <td style={nonMalapiDataCellStyle}>
              &nbsp;{func} <br />
                <span style={nonMalapiDll}>{dll}</span>
              </td>
            </tr>
          );
        }
      });
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

    const infoStyle: React.CSSProperties = {
      fontSize: '12px',
      color: '#dd6600',
    };

    const descriptionStyle: React.CSSProperties = {
      fontSize: '12px',
    };

    return (
      <div style={panelStyle} onClick={togglePanel}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ marginLeft: '5px'}}>{func}</span>
          <span>{isExpanded ? '-' : '+'}</span>
        </div>
        <span style={nonMalapiDll}>{dll}</span>
        {isExpanded && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px', padding: '5px' }}>
            <img src="https://i.postimg.cc/d17YgmV9/warning-small.png" width="16" style={{ marginRight: '5px' }} />
            <span style={infoStyle}>{malapiData.info}</span>
          </div>
        )}
        {isExpanded && (
          <div style={{ padding: '0px 5px 0' }}>
            <span style={descriptionStyle}>{malapiData.description}</span>
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

  const nonMalapiDataCellStyle: React.CSSProperties = {
    ...cellStyle,
    padding: '15px', // Add small padding for functions without malapi entry
  };
  

  const nonMalapiDll: React.CSSProperties = {
    textAlign: 'right',
    color: '#777',
    fontSize: '11px',
    padding: '6px',
  };

  return (
    <table className="table" style={tableStyle}>
      <thead>
        <tr>
         
        </tr>
      </thead>
      <tbody>
        {generateTableRows()}
      </tbody>
    </table>
  );
};

export default ImportsTable;
