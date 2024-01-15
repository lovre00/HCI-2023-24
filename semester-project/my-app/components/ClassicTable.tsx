import React from 'react';
import styles from './ClassicTable.module.css';

const ClassicTable = ({ sections, suspicious }: any) => {
  const sectionKeys = Object.keys(sections);

  const isInList = (sectionName: string) => {
    return suspicious.includes(sectionName);
  };

  const getCheckmarkOrX = (value: number) => {
    return value === 1 ? '✔' : '✖'; // Show checkmark or X based on the value
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr className={styles.header}>
            <th className={`${styles.tableCell} text-sm`}>Section Name</th>
            <th className={`${styles.tableCell} text-sm`}>Size of Raw Data</th>
            <th className={`${styles.tableCell} text-sm`}>Pointer to Raw Data</th>
            <th className={`${styles.tableCell} text-sm`}>Virtual Size</th>
            <th className={`${styles.tableCell} text-sm`}>Virtual Address</th>
            <th className={`${styles.tableCell} text-sm`}>Execute</th>
            <th className={`${styles.tableCell} text-sm`}>Read</th>
            <th className={`${styles.tableCell} text-sm`}>Write</th>
            <th className={`${styles.tableCell} text-sm`}>Entropy</th>
          </tr>
        </thead>
        <tbody>
          {sectionKeys.map((sectionKey, index) => (
            <tr key={sectionKey} className={`${styles.tableRow} ${index % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
              <td className={`${styles.tableCell}`}>{sectionKey}</td>
              <td className={`${styles.tableCell} text-center`}>{sections[sectionKey].sizeofrawdata}</td>
              <td className={`${styles.tableCell} text-center`}>{sections[sectionKey].pointertorawdata}</td>
              <td className={`${styles.tableCell} text-center`}>{sections[sectionKey].virtualsize}</td>
              <td className={`${styles.tableCell} text-center`}>{sections[sectionKey].virtualaddress}</td>
              <td className={`${styles.tableCell} text-center`}>{getCheckmarkOrX(sections[sectionKey].execute)}</td>
              <td className={`${styles.tableCell} text-center`}>{getCheckmarkOrX(sections[sectionKey].read)}</td>
              <td className={`${styles.tableCell} text-center`}>{getCheckmarkOrX(sections[sectionKey].write)}</td>
              <td className={`${styles.tableCell} text-center`} style={{ position: 'relative' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {isInList(sectionKey) && (
                    <img
                      src="https://i.postimg.cc/d17YgmV9/warning-small.png"
                      alt="Warning"
                      width="16"
                      style={{ verticalAlign: 'middle', marginRight: '5px' }}
                    />
                  )}
                  {sections[sectionKey].average_entropy}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassicTable;
