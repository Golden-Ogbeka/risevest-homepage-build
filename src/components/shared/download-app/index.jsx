import React from 'react';
import { downloadPoints } from './data';
import styles from './styles.module.css';

const DownloadApp = () => {
  return (
    <div className={styles.container}>
      {downloadPoints.map((item) => (
        <button key={item.label} className={styles.button}>
          {item.icon}
          <div>
            <p className={styles.buttonTitle}>Download on the</p>
            <p className={styles.buttonText}>{item.label}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DownloadApp;
