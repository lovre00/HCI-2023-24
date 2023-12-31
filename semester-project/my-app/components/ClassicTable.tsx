"use client";
import { useState } from 'react';
import styles from './ClassicTable.module.css'

const ClassicTable = ({ sections }: any) => {
    const sectionKeys = Object.keys(sections);

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
              <tr
                key={sectionKey}
                className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="border p-2">{sectionKey}</td>
                <td className="border p-2 text-center">{sections[sectionKey].sizeofrawdata}</td>
                <td className="border p-2 text-center">{sections[sectionKey].pointertorawdata}</td>
                <td className="border p-2 text-center">{sections[sectionKey].virtualsize}</td>
                <td className="border p-2 text-center">{sections[sectionKey].virtualaddress}</td>
                <td className="border p-2 text-center">{sections[sectionKey].execute}</td>
                <td className="border p-2 text-center">{sections[sectionKey].read}</td>
                <td className="border p-2 text-center">{sections[sectionKey].write}</td>
                <td className="border p-2 text-center">{sections[sectionKey].average_entropy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default ClassicTable;
