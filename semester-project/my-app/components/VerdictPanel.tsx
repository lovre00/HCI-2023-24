import React from 'react';
import styles from './VerdictPanel.module.css'; // Import your CSS file

const VerdictPanel = ({ status, data }: any) => {
  let panelTheme = '';
  let imageSource = '';

  switch (status) {
    case 'warning':
      panelTheme = styles.warningPanel;
      imageSource = "https://i.postimg.cc/BbVgZFNm/ok.png"; // Replace with your warning sign image URL
      break;
    case 'error':
      panelTheme = styles.errorPanel;
      imageSource = '/error-sign.png'; // Replace with your error sign image URL
      break;
    case 'ok':
      panelTheme = styles.okPanel;
      imageSource = 'https://i.postimg.cc/3JGp0zw8/Ionicons-checkmark-circle-svg.png'; // Replace with your OK sign image URL
      break;
    default:
      panelTheme = styles.defaultPanel;
      imageSource = '/default-sign.png'; // Replace with a default sign image URL
      break;
  }

  return (
    <div className={`${styles.panel} ${panelTheme}`}>
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
    </div>
  );
};

export default VerdictPanel;
