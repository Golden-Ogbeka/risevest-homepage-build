import React from 'react';
import WelcomeImage from '../../assets/images/rise-welcome.png';
import DownloadApp from '../shared/download-app';
import styles from './styles.module.css';

const HeroSection = () => {
  return (
    <header className={'section container ' + styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Dollar investments that help you grow</h1>
        <p>
          We put your money in high quality assets that help you build wealth and achieve
          your financial goals.
        </p>
        <DownloadApp />
      </div>
      <img src={WelcomeImage} alt='Risevest app sample' />
    </header>
  );
};

export default HeroSection;
