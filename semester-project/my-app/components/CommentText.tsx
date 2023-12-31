import React from 'react';
import styles from './CommentText.module.css'; // Import CSS module

const CommentText = ({ type, text }: any) => {
  let icon = null;

  // Determine which icon to display based on the type
  switch (type) {
    case 'info':
      icon = <div className={styles.icon}>ℹ️</div>; // Replace with your info icon component or icon source
      break;
    case 'warning':
      icon = <div className={styles.icon}><img src="https://i.postimg.cc/d17YgmV9/warning-small.png" width="16"/></div>; // Replace with your warning icon component or icon source
      break;
    case 'error':
      icon = <div className={styles.icon}>❌</div>; // Replace with your error icon component or icon source
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
