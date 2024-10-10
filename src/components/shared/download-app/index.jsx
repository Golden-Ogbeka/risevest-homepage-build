import React from 'react';
import { ReactComponent as AppleIcon } from '../../../assets/icons/apple.svg';
import { ReactComponent as PlaystoreIcon } from '../../../assets/icons/playstore.svg';
import styles from './styles.module.css';

const DownloadApp = () => {
  const downloadPoints = [
    {
      icon: <AppleIcon />,
      label: 'App Store',
    },
    {
      icon: <PlaystoreIcon />,
      label: 'Google Play',
    },
  ];
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
