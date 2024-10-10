import React from 'react';
import UsersImage from '../../assets/images/rise-users.png';
import DownloadApp from '../shared/download-app';
import styles from './styles.module.css';

const AppDownload = () => {
  return (
    <section id='app-download' className='container section'>
      <div className={styles.downloadContainer}>
        <div className={styles.textContainer}>
          <h1>Download The Rise App</h1>
          <p>Join our 100,000 users investing and setting long term goals!</p>
          <span>Dollar investments that help you grow.</span>
          <DownloadApp />
        </div>
        {/* App Image */}
        <div className={styles.app}>
          <img src={UsersImage} alt='Download Rise App' />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
