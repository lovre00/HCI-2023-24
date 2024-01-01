import React from 'react';
import styles from './ClassicTable.module.css';

const ClassicTable = ({ sections, suspicious }: any) => {
  const sectionKeys = Object.keys(sections);

  const isInList = (sectionName: string) => {
    return suspicious.includes(sectionName);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr className={styles.header}>
            <th className="border p-2 text-sm">Section Name</th>
            <th className="border p-2 text-sm">Size of Raw Data</th>
            <th className="border p-2 text-sm">Pointer to Raw Data</th>
            <th className="border p-2 text-sm">Virtual Size</th>
            <th className="border p-2 text-sm">Virtual Address</th>
            <th className="border p-2 text-sm">Execute</th>
            <th className="border p-2 text-sm">Read</th>
            <th className="border p-2 text-sm">Write</th>
            <th className="border p-2 text-sm">Entropy</th>
          </tr>
        </thead>
        <tbody>
          {sectionKeys.map((sectionKey, index) => (
            <tr key={sectionKey} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border p-2 text-sm">{sectionKey}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].sizeofrawdata}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].pointertorawdata}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].virtualsize}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].virtualaddress}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].execute}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].read}</td>
              <td className="border p-2 text-center text-sm">{sections[sectionKey].write}</td>
              <td className="border p-2 text-center text-sm" style={{ position: 'relative' }}>
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
