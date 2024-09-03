import React from 'react';
import Image from 'next/image';
import styles from './CommentText.module.css'; // Import CSS module
import info from '../assets/info.png';
import warningSmall from '../assets/warning-small.png';

const CommentText = ({ type, text }: any) => {
  let icon = null;

  // Determine which icon to display based on the type
  switch (type) {
    case 'info':
      icon = (
        <div className={styles.icon}>
          <Image 
            src={info.src} // Path to the info icon
            alt="Info"
            width={15}
            height={15}
          />
        </div>
      );
      break;
    case 'warning':
      icon = (
        <div className={styles.icon}>
          <Image 
            src={warningSmall.src} // Path to the warning icon
            alt="Warning"
            width={13}
            height={13}
          />
        </div>
      );
      break;
    case 'error':
      icon = (
        <div className={styles.icon}>
          <span role="img" aria-label="error">❌</span>
        </div>
      );
      break;
    default:
      icon = null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {icon}
        <span className={`${styles.text} ${styles.italic}`}>{text}</span>
      </div>
    </div>
  );
};

export default CommentText;
