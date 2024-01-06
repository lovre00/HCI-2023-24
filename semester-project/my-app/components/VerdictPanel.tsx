import React, { useState, useEffect } from 'react';
import styles from './VerdictPanel.module.css'; // Import your CSS file

const VerdictPanel = ({ status, data }: any) => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    // Use a delay to set the showPanel state after a certain time to trigger the transition effect
    const timeout = setTimeout(() => {
      setShowPanel(true);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  let panelTheme = '';
  let imageSource = '';

  switch (status) {
    case 'warning':
      panelTheme = styles.warningPanel;
      imageSource = "https://i.postimg.cc/3RwdQvfY/warning-big.png"; // Replace with your warning sign image URL
      break;
    case 'critical':
      panelTheme = styles.criticalPanel;
      imageSource = 'https://i.postimg.cc/QCqRmt5P/critical-big.png'; // Replace with your error sign image URL
      break;
    case 'ok':
      panelTheme = styles.okPanel;
      imageSource = 'https://i.postimg.cc/85B9Hcgv/info-big.png'; // Replace with your OK sign image URL
      break;
    default:
      panelTheme = styles.defaultPanel;
      imageSource = '/default-sign.png'; // Replace with a default sign image URL
      break;
  }

  return (
    <div className={`${styles.panel} ${showPanel ? styles.show : ''} ${panelTheme}`}>
      <div className={styles.imageContainer}>
        <img src={imageSource} alt="Status" className={styles.statusImage}/>
      </div>
      <div className={styles.content}>
        {/* Replace placeholders with your labels and corresponding values */}
        <div className={styles.label}>Verdict:</div>
        <div className={styles.value}>{data.verdict}</div>

        <div className={styles.label}>Comment:</div>
        <div className={styles.value}>{data.comment}</div>

        <div className={styles.label}>Suggestions:</div>
        <div className={styles.value}>{data.suggestions}</div>
        {/* Add more labels and values as needed */}
      </div>
      <style jsx>{`
        /* Added CSS for transition effect */
        .show.panel.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default VerdictPanel;
